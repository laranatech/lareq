import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const rotate = makeCommand<number>(
	(angle: number): RenderCommand => ({ command: 'rotate', options: angle })
)
