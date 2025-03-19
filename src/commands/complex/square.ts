import { beginPath, closePath, fill, rect, roundedRect, setCtx, stroke } from '..'
import { Box } from '../../types'
import { CommandOptions } from '../../style'
import { RenderQueue } from '../../queue'

export type SquareOpts = {
	box: Box
	options: CommandOptions
}

export const square = (opts: SquareOpts) => {
	return {
		to: (queue: RenderQueue) => {
			beginPath().to(queue)
			setCtx(opts.options).to(queue)

			if (opts.options.radius) {
				roundedRect({ ...opts.box, radius: opts.options.radius}).to(queue)
			} else {
				rect(opts.box).to(queue)
			}

			if (opts.options.strokeStyle) {
				stroke().to(queue)
			}
			if (opts.options.fillStyle) {
				fill().to(queue)
			}

			closePath().to(queue)
		},
	}
}
