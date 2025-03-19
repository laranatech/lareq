import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const stroke = makeCommand<void>((): RenderCommand => ({ command: 'stroke' }))
