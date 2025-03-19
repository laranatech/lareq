import { Box } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type DrawImageOpts = Box & {
	img: string
}

export const drawImage = makeCommand<DrawImageOpts>(
	(options: DrawImageOpts): RenderCommand => ({ command: 'drawImage', options })
)
