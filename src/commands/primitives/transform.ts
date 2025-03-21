import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const transform = makeCommand<number[]>(
	(options: number[]): RenderCommand => ({ command: 'transform', options })
)
