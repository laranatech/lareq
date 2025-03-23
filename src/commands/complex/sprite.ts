import { Box } from '../../types'
import { RenderQueue } from '../../queue'
import { roundedImage } from './image'

export type SpriteOpts = {
	img: string
	destination: Box
	source: Box
	radius?: number
	customShape?: (q: RenderQueue, opts: SpriteOpts) => void
}

export const sprite = (options: SpriteOpts) => {
	return {
		to: (q: RenderQueue) => {
			let wasSaved = false

			if (options.customShape) {
				q.command.save()
				wasSaved = true
				options.customShape(q, options)
				q.command.clip()
			} else if (options.radius) {
				q.command.save()
				wasSaved = true
				roundedImage(q, { img: options.img, box: options.destination, radius: options.radius })
				q.command.clip()
			}

			q.command.drawSprite(options)

			if (wasSaved) {
				q.command.restore()
			}
		},
	}
}
