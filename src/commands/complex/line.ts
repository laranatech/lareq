import { LinePoint, PointType } from '../../points'
import { CommandOptions } from '../../style'
import { RenderQueue } from '../../queue'

export type LineOpts = {
	points: LinePoint[]
	options: CommandOptions
}

export const line = (options: LineOpts) => {
	return {
		to: (q: RenderQueue) => {
			const methods: Record<PointType, CallableFunction> = {
				'point': q.command.lineTo,
				'arcPoint': q.command.arcTo,
				'movePoint': q.command.moveTo,
				'bezierCurvePoint': q.command.bezierQurveTo,
				'quadraticCurvePoint': q.command.quadraticCurveTo,
			}

			q.command.setCtx(options.options)
			q.command.beginPath()

			options.points.forEach((p) => {
				methods[p.type](p)
			})

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
