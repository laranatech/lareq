import { Point } from '../../types'

export type EllipseOpts = {
	p: Point
	r: Point
	rotation: number
	start?: number
	end?: number
	counterclockwise?: boolean,
}

export const ellipse = (o: EllipseOpts): EllipseOpts => {
	return {
		...o,
		start: o.start || 0,
		end: o.end || Math.PI * 2,
		counterclockwise: o.counterclockwise || false,
	}
}
