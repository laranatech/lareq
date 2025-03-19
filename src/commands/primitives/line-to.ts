import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const lineTo = makeCommand<Point>(
	(p: Point): RenderCommand => ({ command: 'lineTo', options: p })
)
