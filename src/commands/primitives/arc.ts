export type ArcOpts = {
	radius: number
	x: number
	y: number
	start?: number
	end?: number
	counterclockwise?: boolean,
}

export const arc = (o: ArcOpts): ArcOpts => {
	return {
		...o,
		start: o.start || 0,
		end: o.end || Math.PI * 2,
		counterclockwise: o.counterclockwise || false,
	}
}

