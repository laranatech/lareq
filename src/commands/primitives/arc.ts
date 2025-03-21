import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type ArcOpts = {
	radius: number
	x: number
	y: number
	start?: number
	end?: number
	counterclockwise?: boolean,
}

export const arc = makeCommand<ArcOpts>((options: ArcOpts): RenderCommand => {
	return {
		command: 'arc',
		options: {
			...options,
			start: options.start || 0,
			end: options.end || Math.PI * 2,
			counterclockwise: options.counterclockwise ?? false,
		}
	}
})
