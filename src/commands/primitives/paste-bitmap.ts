import { Point } from '../../types'

export type PasteBitmapOpts = Point & {
	bitmap: Uint8ClampedArray
	length: number
	channels: number
}

export const pasteBitmap = (o: PasteBitmapOpts): PasteBitmapOpts => o
