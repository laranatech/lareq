export type LineCap = 'butt' | 'round' | 'square'

export type LineJoin = 'round' | 'bevel' | 'miter'

export type TextBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'

export type TextAlign = 'left' | 'right' | 'center' | 'start' | 'end'

export type Style = {
	bg?: string
	borderCap?: LineCap
	borderWidth?: number
	borderColor?: string
	font?: string
	textBaseline?: TextBaseline
	textAlign?: TextAlign
	radius?: number
	lineDashOffset?: number
	lineJoin?: LineJoin
	pattern?: string
}

export type CommandOptions = {
	fillStyle?: string
	lineCap?: LineCap
	lineWidth?: number
	strokeStyle?: string
	font?: string
	textBaseline?: TextBaseline
	textAlign?: TextAlign
	radius?: number
	lineDashOffset?: number
	lineJoin?: LineJoin
	pattern?: string
}

export const mapStyleToOptions = (style: Style): CommandOptions => ({
	...style,
	fillStyle: style.bg || '',
	lineCap: style.borderCap || 'square',
	lineWidth: style.borderWidth || 0,
	strokeStyle: style.borderColor || '',
})
