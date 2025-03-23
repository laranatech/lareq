import { CommandByte } from './bytes'
import { CommandType } from '.'

export const makeCommand = <T>(method: (options: T) => T) => {
	const commandType = method.name as CommandType
	const c = CommandByte[commandType]
	return (options: T) => ({
		c,
		o: method(options),
	})
}
