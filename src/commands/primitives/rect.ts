import { Box } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const rect = makeCommand<Box>(
	(box: Box): RenderCommand => ({ command: 'rect', options: box })
)
