import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const clip = makeCommand<void>((): RenderCommand => ({ command: 'clip' }))
