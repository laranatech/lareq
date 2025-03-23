import { arc } from './arc'
import { arcTo } from './arc-to'
import { beginPath } from './begin-path'
import { bezierQurveTo } from './bezierCurveTo'
import { clearRect } from './clear-rect'
import { clip } from './clip'
import { closePath } from './close-path'
import { drawImage } from './draw-image'
import { drawSprite } from './draw-sprite'
import { ellipse } from './ellipse'
import { fill } from './fill'
import { fillText } from './fillText'
import { lineTo } from './line-to'
import { moveTo } from './move-to'
import { pasteBitmap } from './paste-bitmap'
import { quadraticCurveTo } from './quadratic-curve-to'
import { rect } from './rect'
import { reset } from './reset'
import { resetTransform } from './reset-transform'
import { restore } from './restore'
import { rotate } from './rotate'
import { roundedRect } from './rounded-rect'
import { save } from './save'
import { scale } from './scale'
import { setCtx } from './set-ctx'
import { setLineDash } from './set-line-dash'
import { setTransform } from './set-transform'
import { stroke } from './stroke'
import { strokeText } from './strokeText'
import { transform } from './transform'
import { translate } from './translate'

export const primitives = {
	arc,
	arcTo,
	beginPath,
	bezierQurveTo,
	clearRect,
	clip,
	closePath,
	drawImage,
	drawSprite,
	ellipse,
	fill,
	fillText,
	lineTo,
	moveTo,
	pasteBitmap,
	quadraticCurveTo,
	rect,
	reset,
	resetTransform,
	restore,
	rotate,
	roundedRect,
	save,
	scale,
	setLineDash,
	setTransform,
	setCtx,
	stroke,
	strokeText,
	transform,
	translate,
}

export * from './arc'
export * from './arc-to'
export * from './begin-path'
export * from './bezierCurveTo'
export * from './clear-rect'
export * from './clip'
export * from './close-path'
export * from './draw-image'
export * from './draw-sprite'
export * from './ellipse'
export * from './fill'
export * from './fillText'
export * from './line-to'
export * from './move-to'
export * from './paste-bitmap'
export * from './quadratic-curve-to'
export * from './rect'
export * from './reset'
export * from './reset-transform'
export * from './restore'
export * from './rotate'
export * from './rounded-rect'
export * from './save'
export * from './scale'
export * from './set-line-dash'
export * from './set-transform'
export * from './set-ctx'
export * from './stroke'
export * from './strokeText'
export * from './transform'
export * from './translate'

export type PrimitiveCommandType = keyof typeof primitives
