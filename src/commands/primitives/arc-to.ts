import { Point } from '../../types'

export type ArcToOpts = {
	a: Point
	b: Point
	radius: number
}

export const arcTo = (o: ArcToOpts): ArcToOpts => o
