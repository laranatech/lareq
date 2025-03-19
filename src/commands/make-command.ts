import { RenderCommand, RenderQueue } from '../queue'

export const makeCommand = <T>(method: (options: T) => RenderCommand) => {
	return (options: T) => {
		const result: RenderCommand = method(options)

		return {
			result,
			to: (queue: RenderQueue) => {
				queue.add(result.command, result.options)
			},
		}
	}
}

export const makeComplexCommand = <T>(method: (options: T) => RenderCommand[]) => {
	return (options: T) => {
		const result: RenderCommand[] = method(options)

		return {
			result,
			to: (queue: RenderQueue) => {
				result.forEach((item: RenderCommand) => {
					queue.add(item.command, item.options)
				})
			},
		}
	}
}
