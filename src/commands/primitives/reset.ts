import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const reset = makeCommand<void>((): RenderCommand => ({ command: 'reset' }))
