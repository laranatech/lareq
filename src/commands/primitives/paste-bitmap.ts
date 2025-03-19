import { Box } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type PasteBitmapOpts = Box & {
	bitmap: string
	length: number
	channels: number
}

export const pasteBitmap = makeCommand<PasteBitmapOpts>(
	(options: PasteBitmapOpts): RenderCommand => ({ command: 'pasteBitmap', options })
)
