import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type BezierQurveToOpts = {
	c1: Point
	c2: Point
	p: Point
}

export const bezierQurveTo = makeCommand<BezierQurveToOpts>(
	(options: BezierQurveToOpts): RenderCommand => ({ command: 'bezierQurveTo', options })
)
