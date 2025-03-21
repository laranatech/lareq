import {
	arc,
	beginPath,
	clip,
	closePath,
	drawImage,
	restore,
	roundedRect,
	save,
} from '..'
import { Box } from '../../types'
import { RenderQueue } from '../../queue'

export type ImageOpts = {
	img: string
	box: Box
	radius?: number
	customShape?: (queue: RenderQueue, opts: ImageOpts) => void
}

export const roundedImage = (queue: RenderQueue, opts: ImageOpts) => {
	const { box, radius = 0 } = opts
	const { x, y } = box

	beginPath().to(queue)

	const halfWidth = box.w / 2

	if (box.h === box.w && radius >= halfWidth) {
		arc({ x: x + halfWidth, y: y + halfWidth, radius: halfWidth }).to(queue)
		closePath().to(queue)
		return
	}

	roundedRect({ ...box, radius }).to(queue)
	closePath().to(queue)
}

export const image = (options: ImageOpts) => {
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
				roundedImage(queue, options)
				clip().to(queue)
			}

			drawImage({
				img: options.img,
				...options.box,
			}).to(queue)

			if (wasSaved) {
				restore().to(queue)
			}
		},
	}
}
