import { ArcOpts } from '../primitives/arc'
import { CommandOptions } from '../../style'
import { RenderQueue } from '../../queue'

export type CircleOpts = {
	arc: ArcOpts
	options: CommandOptions
}

export const circle = (opts: CircleOpts) => {
	return {
		to: (q: RenderQueue) => {
			q.command.beginPath()
			q.command.setCtx(opts.options)

			q.command.arc(opts.arc)

			if (opts.options.strokeStyle) {
				q.command.stroke()
			}
			if (opts.options.fillStyle) {
				q.command.fill()
			}

			q.command.closePath()
		},
	}
}
