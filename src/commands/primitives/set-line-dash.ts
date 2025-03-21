import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const setLineDash = makeCommand<number[]>(
	(options: number[]): RenderCommand => ({ command: 'setLineDash', options })
)
