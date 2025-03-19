import { ComplexCommandType } from './complex'
import { PrimitiveCommandType } from './primitives'

export * from './complex'
export * from './primitives'

export type CommandType = ComplexCommandType | PrimitiveCommandType
