import {
	clip,
	drawSprite,
	restore,
	roundedImage,
	save,
} from '..'
import { Box } from '../../types'
import { RenderQueue } from '../../queue'

export type SpriteOpts = {
	img: string
	destination: Box
	source: Box
	radius?: number
	customShape?: (queue: RenderQueue, opts: SpriteOpts) => void
}

export const sprite = (options: SpriteOpts) => {
	return {
		to: (queue: RenderQueue) => {
			let wasSaved = false

			if (options.customShape) {
				save().to(queue)
				wasSaved = true
				options.customShape(queue, options)
				clip().to(queue)
			} else if (options.radius) {
				save().to(queue)
				wasSaved = true
				roundedImage(queue, { img: options.img, box: options.destination, radius: options.radius })
				clip().to(queue)
			}

			drawSprite(options).to(queue)

			if (wasSaved) {
				restore().to(queue)
			}
		},
	}
}
