import { CommandOptions } from '../../style'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const setCtx = makeCommand<CommandOptions>(
	(options: CommandOptions): RenderCommand => ({ command: 'setCtx', options })
)
