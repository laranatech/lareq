import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const setTransform = makeCommand<number[]>(
	(options: number[]): RenderCommand => ({ command: 'setTransform', options })
)
