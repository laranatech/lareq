import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const moveTo = makeCommand<Point>(
	(p: Point): RenderCommand => ({ command: 'moveTo', options: p })
)
