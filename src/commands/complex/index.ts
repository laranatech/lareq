import { arrow } from './arrow'
import { arrowHead } from './arrow-head'
import { circle } from './circle'
import { image } from './image'
import { line } from './line'
import { sprite } from './sprite'
import { square } from './square'

export const complex = {
	arrow,
	arrowHead,
	circle,
	image,
	line,
	sprite,
	square,
}

export * from './arrow'
export * from './arrow-head'
export * from './circle'
export * from './image'
export * from './line'
export * from './sprite'
export * from './square'

export type ComplexCommandType = keyof typeof complex
