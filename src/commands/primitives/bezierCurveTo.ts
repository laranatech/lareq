import { Point } from '../../types'

export type BezierQurveToOpts = {
	c1: Point
	c2: Point
	p: Point
}

export const bezierQurveTo = (o: BezierQurveToOpts): BezierQurveToOpts => o
