import { ArcOpts, arc } from '../primitives/arc'
import { CommandOptions } from '../../style'
import { RenderQueue } from '../../queue'
import { beginPath } from '../primitives/begin-path'
import { closePath } from '../primitives/close-path'
import { fill } from '../primitives/fill'
import { setCtx } from '../primitives/setCtx'
import { stroke } from '../primitives/stroke'

export type CircleOpts = {
	arc: ArcOpts
	options: CommandOptions
}

export const circle = (opts: CircleOpts) => {
	return {
		to: (queue: RenderQueue) => {
			beginPath().to(queue)
			setCtx(opts.options).to(queue)

			arc(opts.arc).to(queue)

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
