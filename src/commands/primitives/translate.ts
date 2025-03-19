import { Point } from '../../types'
import { RenderCommand } from '../../queue'
import { makeCommand } from '../make-command'

export const translate = makeCommand<Point>(
	(p: Point): RenderCommand => ({ command: 'translate', options: p })
)
