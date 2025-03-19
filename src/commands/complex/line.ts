import { LinePoint, PointType } from '../../points'
import { arcTo, beginPath, bezierQurveTo, closePath, fill, lineTo, moveTo, quadraticCurveTo, setCtx, stroke } from '..'
import { CommandOptions } from '../../style'
import { RenderQueue } from '../../queue'

export type LineOpts = {
	points: LinePoint[]
	options: CommandOptions
}

export const line = (options: LineOpts) => {
	const methods: Record<PointType, CallableFunction> = {
		'point': lineTo,
		'arcPoint': arcTo,
		'movePoint': moveTo,
		'bezierCurvePoint': bezierQurveTo,
		'quadraticCurvePoint': quadraticCurveTo,
	}

	return {
		to: (queue: RenderQueue) => {
			setCtx(options.options).to(queue)
			beginPath().to(queue)
			options.points.forEach((p) => {
				methods[p.type](p).to(queue)
			})

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
