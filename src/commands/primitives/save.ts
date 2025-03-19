import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const save = makeCommand<void>(
	(): RenderCommand => ({ command: 'save' })
)
