import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type StrokeTextOpts = Point & {
	text: string
	maxWidth: number
}

export const strokeText = makeCommand<StrokeTextOpts>(
	(options: StrokeTextOpts): RenderCommand => ({ command: 'strokeText', options })
)
