import { arc } from './arc'
import { arcTo } from './arc-to'
import { beginPath } from './begin-path'
import { bezierQurveTo } from './bezierCurveTo'
import { clip } from './clip'
import { closePath } from './close-path'
import { drawImage } from './draw-image'
import { drawSprite } from './draw-sprite'
import { fill } from './fill'
import { fillText } from './fillText'
import { lineTo } from './line-to'
import { moveTo } from './move-to'
import { pasteBitmap } from './paste-bitmap'
import { quadraticCurveTo } from './quadratic-curve-to'
import { rect } from './rect'
import { restore } from './restore'
import { rotate } from './rotate'
import { roundedRect } from './rounded-rect'
import { save } from './save'
import { scale } from './scale'
import { setCtx } from './setCtx'
import { stroke } from './stroke'
import { strokeText } from './strokeText'
import { translate } from './translate'

export const primitives = {
	arc,
	arcTo,
	beginPath,
	bezierQurveTo,
	clip,
	closePath,
	drawImage,
	drawSprite,
	fill,
	fillText,
	lineTo,
	moveTo,
	pasteBitmap,
	quadraticCurveTo,
	rect,
	restore,
	rotate,
	roundedRect,
	save,
	scale,
	setCtx,
	stroke,
	strokeText,
	translate,
}

export * from './arc'
export * from './arc-to'
export * from './begin-path'
export * from './bezierCurveTo'
export * from './clip'
export * from './close-path'
export * from './draw-image'
export * from './draw-sprite'
export * from './fill'
export * from './fillText'
export * from './line-to'
export * from './move-to'
export * from './paste-bitmap'
export * from './quadratic-curve-to'
export * from './rect'
export * from './restore'
export * from './rotate'
export * from './rounded-rect'
export * from './save'
export * from './scale'
export * from './setCtx'
export * from './stroke'
export * from './strokeText'
export * from './translate'

export type PrimitiveCommandType = keyof typeof primitives
