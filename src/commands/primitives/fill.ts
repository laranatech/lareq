import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const fill = makeCommand<void>((): RenderCommand => ({ command: 'fill' }))
