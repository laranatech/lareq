import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type FillTextOpts = Point & {
	text: string
	maxWidth: number
}

export const fillText = makeCommand<FillTextOpts>(
	(options: FillTextOpts): RenderCommand => ({ command: 'fillText', options })
)
