import { Point } from '../../types'

export type QuadraticCurveToOpts = {
	c: Point
	p: Point
}

export const quadraticCurveTo = (o: QuadraticCurveToOpts): QuadraticCurveToOpts => o
