import { Point } from '../../types'

export type FillTextOpts = Point & {
	text: string
	maxWidth: number
}

export const fillText = (o: FillTextOpts): FillTextOpts => o
