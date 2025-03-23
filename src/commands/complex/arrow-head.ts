import { Point } from '../../types'
import { RenderQueue } from '../../queue'
import { point } from '../../points'

export type ArrowHeadOpts = {
	d: Point
	tip: Point
	length: number
}

export const arrowHead = (options: ArrowHeadOpts) => {
	return {
		to: (q: RenderQueue) => {
			const { d, tip, length } = options

			let first = point(tip.x, tip.y)
			let last = point(tip.x, tip.y)

			if (d.x === 0) {
				const delta = d.y < 0 ? 1 : -1
				first = point(tip.x + length, tip.y + length * delta)
				last = point(tip.x - length, tip.y + length * delta)
			} else if (d.y === 0) {
				const delta = d.x < 0 ? 1 : -1
				first = point(tip.x + length * delta, tip.y + length)
				last = point(tip.x + length * delta, tip.y - length)
			}

			q.command.moveTo(first)
			q.command.lineTo(tip)
			q.command.lineTo(last)
		},
	}
}
