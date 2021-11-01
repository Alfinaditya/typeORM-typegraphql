import { UserRole } from '../../entities/user';
import { createMethodDecorator } from 'type-graphql';
import { MyContext } from '../../myContext';

export function IsAdmin() {
	return createMethodDecorator<MyContext>(async ({ context }, next) => {
		const role = context.payload?.role;
		if (role === UserRole.USER) {
			throw new Error('You are not admin bitch');
		}
		return next();
	});
}
