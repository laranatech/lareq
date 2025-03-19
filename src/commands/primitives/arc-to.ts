import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export type ArcToOpts = {
	a: Point
	b: Point
	radius: number
}

export const arcTo = makeCommand<ArcToOpts>(
	(options: ArcToOpts): RenderCommand => ({ command: 'arcTo', options })
)
