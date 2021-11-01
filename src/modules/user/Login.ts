import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../entities/user';
import LoginInput from './input/LoginInput';
import { MyContext } from '../../myContext';

@ObjectType()
class Response {
	@Field(_type => User, { nullable: true })
	user!: User | null;

	@Field(_type => String, { nullable: true })
	message!: string | null;
}

@Resolver(User)
class LoginResolver {
	@Mutation(_returns => Response)
	async login(
		@Arg('input') input: LoginInput,
		@Ctx() ctx: MyContext
	): Promise<Response | undefined | string> {
		const user = await User.findOne({ email: input.email });
		if (!user) return { user: null, message: 'Login Failed' };
		const comparedPassword = await bcrypt.compare(
			input.password,
			user.password
		);
		if (!comparedPassword) {
			return { user: null, message: 'Login Failed' };
		}
		const token = jwt.sign({ id: user.id, role: user.role }, 'mysecret', {
			expiresIn: '7d',
		});
		ctx.res.cookie('jid', token, {
			sameSite: 'none',
			secure: true,
		});
		return { user, message: '' };
	}
}

export default LoginResolver;
