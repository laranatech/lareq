import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const scale = makeCommand<Point>(
	(p: Point): RenderCommand => ({ command: 'scale', options: p })
)
