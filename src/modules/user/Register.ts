import { Arg, Mutation, Resolver } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User } from '../../entities/user';
import RegisterInput from '../shared/RegisterInput';

@Resolver(User)
class RegisterResolver {
	@Mutation(_returns => User)
	async register(@Arg('input') input: RegisterInput): Promise<User> {
		const hashedPassword = await bcrypt.hash(input.password, 12);
		const user = await User.create({
			name: input.name,
			email: input.email,
			password: hashedPassword,
		}).save();
		return user;
	}
}

export default RegisterResolver;
