import { CommandByte } from './bytes'
import { CommandType } from '.'

export const makeCommand = <T>(name: CommandType, method: (options: T) => T) => {
	const c = CommandByte[name]
	return (options: T) => ({
		c,
		o: method(options),
	})
}
