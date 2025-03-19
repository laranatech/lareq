import { Box } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type DrawSpriteOpts = {
	img: string
	source: Box
	destination: Box
}

export const drawSprite = makeCommand<DrawSpriteOpts>(
	(options: DrawSpriteOpts): RenderCommand => ({ command: 'drawSprite', options })
)
