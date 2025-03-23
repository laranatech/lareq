import { Box } from '../../types'

export type PasteBitmapOpts = Box & {
	bitmap: Uint8Array
	length: number
	channels: number
}

export const pasteBitmap = (o: PasteBitmapOpts): PasteBitmapOpts => o
