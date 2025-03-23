import { Box } from '../../types'
import { RenderQueue } from '../../queue'

export type ImageOpts = {
	img: string
	box: Box
	radius?: number
	customShape?: (q: RenderQueue, opts: ImageOpts) => void
}

export const roundedImage = (q: RenderQueue, opts: ImageOpts) => {
	const { box, radius = 0 } = opts
	const { x, y } = box

	q.command.beginPath()

	const halfWidth = box.w / 2

	if (box.h === box.w && radius >= halfWidth) {
		q.command.arc({ x: x + halfWidth, y: y + halfWidth, radius: halfWidth })
		q.command.closePath()
		return
	}

	q.command.roundedRect({ ...box, radius })
	q.command.closePath()
}

export const image = (options: ImageOpts) => {
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
				roundedImage(q, options)
				q.command.clip()
			}

			q.command.drawImage({
				img: options.img,
				...options.box,
			})

			if (wasSaved) {
				q.command.restore()
			}
		},
	}
}
