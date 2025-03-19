import {
	beginPath,
	clip,
	closePath,
	drawImage,
	lineTo,
	moveTo,
	quadraticCurveTo,
	restore,
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

export const image = (options: ImageOpts) => {
	const roundedImageSquare = (queue: RenderQueue, opts: ImageOpts) => {
		const { box, radius = 0 } = opts
		const { x, y, w, h } = box

		if (box.h === box.w && radius >= box.h / 2) {
			return
		}

		beginPath().to(queue)
		moveTo({ x: x + radius, y }).to(queue)
		lineTo({ x: x + w - radius, y }).to(queue)
		quadraticCurveTo({
			p: { x: x + w, y },
			c: { x: x + w, y: y + radius },
		}).to(queue)
		lineTo({ x: x + w, y: y + h - radius }).to(queue)
		quadraticCurveTo({
			p: { x: x + w, y: y + h },
			c: { x: x + w - radius, y: y -h },
		}).to(queue)
		lineTo({ x: x + radius, y: y + h }).to(queue)
		quadraticCurveTo({
			p: { x, y: y + h },
			c: { x, y: y + h - radius },
		}).to(queue)
		lineTo({ x, y: y + radius }).to(queue)
		quadraticCurveTo({
			p: { x, y },
			c: { x: x + radius, y },
		}).to(queue)
		closePath().to(queue)
	}

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
				roundedImageSquare(queue, options)
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
