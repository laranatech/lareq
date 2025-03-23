import { CommandType } from '.'

export const CommandByte: Record<CommandType, number> = {
	arc: 0,
	arcTo: 1,
	beginPath: 2,
	bezierQurveTo: 3,
	clearRect: 4,
	clip: 5,
	closePath: 6,
	drawImage: 7,
	drawSprite: 8,
	fill: 9,
	fillText: 10,
	lineTo: 11,
	moveTo: 12,
	pasteBitmap: 13,
	quadraticCurveTo: 14,
	rect: 15,
	reset: 16,
	resetTransform: 17,
	restore: 18,
	rotate: 19,
	roundedRect: 20,
	save: 21,
	scale: 22,
	setLineDash: 23,
	setTransform: 24,
	setCtx: 25,
	stroke: 26,
	strokeText: 27,
	transform: 28,
	translate: 29,
	ellipse: 30,
} as const

export const getCommandNameByByte = (n: number): CommandType => {
	const c = Object.entries(CommandByte).find(([_, value]) => {
		return n === value
	})

	if (!c) {
		throw new Error('Not found')
	}

	return c[0] as CommandType
}
