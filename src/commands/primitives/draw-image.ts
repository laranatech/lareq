import { Box } from '../../types'

export type DrawImageOpts = Box & {
	img: string
}

export const drawImage = (o: DrawImageOpts): DrawImageOpts => o
