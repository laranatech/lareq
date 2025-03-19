import { Box } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type RoundedRectOpts = Box & { radius: number }

export const roundedRect = makeCommand<RoundedRectOpts>(
	(options: RoundedRectOpts): RenderCommand => ({ command: 'roundedRect', options })
)
