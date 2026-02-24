import { CommandByte, CommandType, complex, primitives } from './commands'
import { makeCommand } from './commands/make-command'

type WrappedComplex = {
	[K in keyof typeof complex]: (o: Parameters<(typeof complex)[K]>[0]) => void
}

type WrappedPrimitives = {
	[K in keyof typeof primitives]: (
		o: Parameters<(typeof primitives)[K]>[0]
	) => ReturnType<(typeof primitives)[K]>
}

export type RenderCommand = {
	/**\
	 * Command name
	 */
	c: number
	/**\
	 * Command options
	 */
	o?: unknown
}

export class RenderQueue {
	commands: RenderCommand[] = []

	command = this.createCommands(primitives)

	complex = this.createComplexCommands(complex)

	createComplexCommands(commands: typeof complex): WrappedComplex {
		const makeQueueCommand = <T>(command: (o: T) => { to: (q: RenderQueue) => void }) => {
			return (o: T) => {
				command(o).to(this)
			}
		}

		const result = {} as WrappedComplex

		type ComplexCommandFn = (o: unknown) => { to: (q: RenderQueue) => void }
		function wrap<K extends keyof typeof complex>(
			_name: K,
			cmd: (typeof complex)[K]
		): WrappedComplex[K] {
			return makeQueueCommand<Parameters<(typeof complex)[K]>[0]>(
				cmd as ComplexCommandFn
			) as WrappedComplex[K]
		}
		for (const name of Object.keys(commands) as (keyof typeof complex)[]) {
			;(result as Record<keyof typeof complex, WrappedComplex[keyof typeof complex]>)[
				name
			] = wrap(name, commands[name])
		}

		return result
	}

	createCommands(commands: typeof primitives): WrappedPrimitives {
		const makeQueueCommand = <T>(name: CommandType, command: (o: T) => T) => {
			const c = makeCommand(name, command)
			return (o: T) => {
				const r = c(o)
				this.add(r.c, r.o)
				return o
			}
		}
		const result = {} as WrappedPrimitives

		function wrapPrimitive<K extends keyof typeof primitives>(
			name: K,
			cmd: (typeof primitives)[K]
		): WrappedPrimitives[K] {
			return makeQueueCommand<Parameters<(typeof primitives)[K]>[0]>(
				name,
				cmd as (o: Parameters<(typeof primitives)[K]>[0]) => Parameters<
					(typeof primitives)[K]
				>[0]
			) as WrappedPrimitives[K]
		}
		for (const name of Object.keys(commands) as (keyof typeof primitives)[]) {
			;(result as Record<
				keyof typeof primitives,
				WrappedPrimitives[keyof typeof primitives]
			>)[name] = wrapPrimitive(name, commands[name])
		}

		return result
	}

	add(c: number, o: unknown) {
		this.commands.push({ c, o })
	}

	json() {
		return this.commands
	}

	toCompressed() {
		const compressedCommand: RenderCommand[] = []
		const seenKeyValues = new Set<string>()

		for (const cmd of this.commands) {
			if (cmd.c !== CommandByte.setCtx) {
				compressedCommand.push(cmd)
				continue
			}

			const newEntries = Object.entries(cmd.o || {}).filter(([key, value]) => {
				const keyValue = `${key}:${JSON.stringify(value)}`

				if (seenKeyValues.has(keyValue)) return false

				seenKeyValues.add(keyValue)

				return true
			})

			if (newEntries.length > 0) {
				compressedCommand.push({ c: cmd.c, o: Object.fromEntries(newEntries) })
			}
		}

		return compressedCommand
	}
}
