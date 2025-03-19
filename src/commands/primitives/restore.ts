import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const restore = makeCommand<void>((): RenderCommand => ({ command: 'restore' }))
