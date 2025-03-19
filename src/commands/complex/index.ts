import { arrow } from './arrow'
import { arrowHead } from './arrow-head'
import { circle } from './circle'
import { image } from './image'
import { line } from './line'
import { square } from './square'

export const complex = {
	square,
	circle,
	image,
	line,
	arrow,
	arrowHead,
}

export * from './arrow'
export * from './arrow-head'
export * from './circle'
export * from './image'
export * from './line'
export * from './square'

export type ComplexCommandType = keyof typeof complex
