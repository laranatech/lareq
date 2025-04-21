import { CommandType, complex, primitives } from './commands'
import { makeCommand } from './commands/make-command'

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

	createComplexCommands(commands: typeof complex) {
		const makeQueueCommand = <T>(command: (o: T) => { to: (q: RenderQueue) => void }) => {
			return (o: T) => {
				command(o).to(this)
			}
		}

		const result: typeof complex = { ...complex }

		Object.entries(commands).forEach(([key, value]) => {
			const name = key as keyof typeof complex
			const command = value as typeof complex[typeof name]

			// TODO: fix typing
			//@ts-expect-error todo: fix error
			result[name] = makeQueueCommand<ReturnType<typeof command>>(command)
		})

		return result
	}

	createCommands(commands: typeof primitives): typeof primitives {
		const makeQueueCommand = <T>(name: CommandType, command: (o: T) => T) => {
			const c = makeCommand(name, command)
			return (o: T) => {
				const r = c(o)
				this.add(r.c, r.o)
				return o
			}
		}
		const result: typeof primitives = { ...primitives }

		Object.entries(commands).forEach(([key, value]) => {
			const name = key as CommandType
			const command = value as typeof primitives[typeof name]

			// TODO: fix typing
			//@ts-expect-error todo: fix error
			result[name] = makeQueueCommand<ReturnType<typeof command>>(name, command)
		})

		return result
	}

	add(c: number, o: unknown) {
		this.commands.push({ c, o })
	}

	json() {
		return this.commands
	}

	toCompressed() {
		return this.commands.filter((c) => {
			if (c.c !== 25) {
				return true
			}
			return c.o ? Object.keys(c.o).length > 0 : false
		})
	}
}
