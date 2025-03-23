import { Box } from '../../types'

export type RoundedRectOpts = Box & { radius: number }

export const roundedRect = (o: RoundedRectOpts): RoundedRectOpts => o
