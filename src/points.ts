import { ArcToOpts } from './commands/primitives/arc-to'
import { BezierQurveToOpts } from './commands/primitives/bezierCurveTo'
import { Point } from './types'
import { QuadraticCurveToOpts } from './commands/primitives/quadratic-curve-to'

export type PointType = 'arcPoint' | 'bezierCurvePoint' | 'point' | 'quadraticCurvePoint' | 'movePoint'

export type TypedPoint = {
	type: PointType
}

export const arcPoint = (a: Point, b: Point, radius: number): TypedPoint & ArcToOpts => ({
	type: 'arcPoint',
	a,
	b,
	radius,
})

export const bezierCurvePoint = (c1: Point, c2: Point, p: Point): TypedPoint & BezierQurveToOpts => ({
	type: 'bezierCurvePoint',
	c1,
	c2,
	p,
})

export const point = (x: number, y: number): TypedPoint & Point => ({
	type: 'point',
	x,
	y,
})

export const movePoint = (x: number, y: number): TypedPoint & Point => ({
	type: 'movePoint',
	x,
	y,
})

export const quadraticCurvePoint = (c: Point, p: Point): TypedPoint & QuadraticCurveToOpts => ({
	type: 'quadraticCurvePoint',
	c,
	p,
})

export type LinePoint =
	| ReturnType<typeof arcPoint>
	| ReturnType<typeof point>
	| ReturnType<typeof movePoint>
	| ReturnType<typeof bezierCurvePoint>
	| ReturnType<typeof quadraticCurvePoint>
