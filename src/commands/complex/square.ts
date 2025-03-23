import { Box } from '../../types'
import { CommandOptions } from '../../style'
import { RenderQueue } from '../../queue'

export type SquareOpts = {
	box: Box
	options: CommandOptions
}

export const square = (opts: SquareOpts) => {
	return {
		to: (q: RenderQueue) => {
			q.command.beginPath()
			q.command.setCtx(opts.options)

			if (opts.options.radius) {
				q.command.roundedRect({ ...opts.box, radius: opts.options.radius})
			} else {
				q.command.rect(opts.box)
			}

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
