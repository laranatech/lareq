import { Box } from '../../types'

export type DrawSpriteOpts = {
	img: string
	source: Box
	destination: Box
}

export const drawSprite = (o: DrawSpriteOpts): DrawSpriteOpts => o
