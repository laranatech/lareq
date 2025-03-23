import { LineOpts, line } from './line'
import { Point } from '../../types'
import { RenderQueue } from '../../queue'
import { arrowHead } from './arrow-head'

export type ArrowOpts = LineOpts & {
	headLength?: number
}

export const arrow = (options: ArrowOpts) => {
	return {
		to: (q: RenderQueue) => {
			line(options).to(q)

			const prevPoint = options.points[options.points.length - 2] as Point
			const lastPoint = options.points[options.points.length - 1] as Point

			q.command.setCtx(options.options)
			q.command.beginPath()

			arrowHead({
				tip: lastPoint,
				d: { x: lastPoint.x - prevPoint.x, y: lastPoint.y - prevPoint.y },
				length: options.headLength || 8,
			}).to(q)

			if (options.options.strokeStyle) {
				q.command.stroke()
			}
			if (options.options.fillStyle) {
				q.command.fill()
			}
			q.command.closePath()
		},
	}
}
