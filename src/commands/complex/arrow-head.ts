import { Point } from '../../types'
import { RenderQueue } from '../../queue'

export type ArrowHeadOpts = {
	a: Point
	b: Point
	length: number
}

export const arrowHead = (options: ArrowHeadOpts) => {
	return {
		to: (q: RenderQueue) => {
			const { a, b, length } = options

			const angle = Math.atan2(b.y - a.y, b.x - a.x)

			q.command.beginPath()
			q.command.moveTo(b)
			q.command.lineTo({
				x: b.x - length * Math.cos(angle - Math.PI / 6),
				y: b.y - length * Math.sin(angle - Math.PI / 6),
			})
			q.command.lineTo({
				x: b.x - length * Math.cos(angle + Math.PI / 6),
				y: b.y - length * Math.sin(angle + Math.PI / 6),
			})
			q.command.closePath()
			q.command.fill()
		},
	}
}
