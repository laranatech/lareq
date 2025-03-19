import { LineOpts, line } from './line'
import { beginPath, closePath, fill, setCtx, stroke } from '..'
import { Point } from '../../types'
import { RenderQueue } from '../../queue'
import { arrowHead } from './arrow-head'

export type ArrowOpts = LineOpts

export const arrow = (options: ArrowOpts) => {
	return {
		to: (queue: RenderQueue) => {
			line(options).to(queue)

			const prevPoint = options.points[options.points.length - 2] as Point
			const lastPoint = options.points[options.points.length - 1] as Point

			setCtx(options.options).to(queue)
			beginPath().to(queue)

			arrowHead({
				tip: lastPoint,
				d: { x: lastPoint.x - prevPoint.x, y: lastPoint.y - prevPoint.y },
				length: 8, // TODO: add option
			}).to(queue)

			if (options.options.strokeStyle) {
				stroke().to(queue)
			}
			if (options.options.fillStyle) {
				fill().to(queue)
			}
			closePath().to(queue)
		},
	}
}
