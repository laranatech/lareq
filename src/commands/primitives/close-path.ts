import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const closePath = makeCommand<void>((): RenderCommand => ({ command: 'closePath' }))
