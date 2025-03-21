import { Box } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const clearRect = makeCommand<Box>(
	(box: Box): RenderCommand => ({ command: 'clearRect', options: box })
)
