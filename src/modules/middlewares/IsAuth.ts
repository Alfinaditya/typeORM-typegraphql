import jwt from 'jsonwebtoken';
import { createMethodDecorator } from 'type-graphql';
import { MyContext } from '../../myContext';

export function IsAuth() {
	return createMethodDecorator<MyContext>(async ({ context }, next) => {
		const { authorization } = context.req.headers;
		if (!authorization) {
			throw new Error('You are not auth');
		}
		try {
			const token = authorization.split(' ')[1];
			const payload = jwt.verify(token, 'mysecret');
			context.payload = payload as any;
		} catch (err) {
			console.log(err);
			throw new Error('You are not auth');
		}
		return next();
	});
}
