import { CommandType } from './commands'

export type RenderCommand = {
	command: CommandType
	options?: unknown
}

export class RenderQueue {
	commands: RenderCommand[] = []

	add(command: CommandType, options: unknown) {
		this.commands.push({ command, options })
	}

	json() {
		return this.commands
	}
}
