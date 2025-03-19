import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type QuadraticCurveToOpts = {
	c: Point
	p: Point
}

export const quadraticCurveTo = makeCommand<QuadraticCurveToOpts>(
	(options: QuadraticCurveToOpts): RenderCommand => ({ command: 'quadraticCurveTo', options })
)
