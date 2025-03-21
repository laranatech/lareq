import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const resetTransform = makeCommand<void>((): RenderCommand => ({ command: 'resetTransform' }))
