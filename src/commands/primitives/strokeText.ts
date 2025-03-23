import { Point } from '../../types'

export type StrokeTextOpts = Point & {
	text: string
	maxWidth: number
}

export const strokeText = (o: StrokeTextOpts): StrokeTextOpts => o
