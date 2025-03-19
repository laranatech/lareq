import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const beginPath = makeCommand<void>((): RenderCommand => ({ command: 'beginPath' }))
