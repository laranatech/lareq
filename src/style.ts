export type LineCap = 'butt' | 'round' | 'square'

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
}

export const mapStyleToOptions = (style: Style): CommandOptions => ({
	fillStyle: style.bg || '',
	lineCap: style.borderCap || 'square',
	lineWidth: style.borderWidth || 0,
	strokeStyle: style.borderColor || '',
	font: style.font || '',
	textBaseline: style.textBaseline || 'alphabetic',
	textAlign: style.textAlign || 'start',
	radius: style.radius || 0,
})
