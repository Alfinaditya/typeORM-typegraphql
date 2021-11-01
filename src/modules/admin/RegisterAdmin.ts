import { Arg, Mutation, Resolver } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User, UserRole } from '../../entities/user';
import RegisterInput from '../shared/RegisterInput';
import { IsAuth } from '../middlewares/IsAuth';
import { IsAdmin } from '../middlewares/IsAdmin';

@Resolver(User)
class RegisterAdminResolver {
	@IsAuth()
	@IsAdmin()
	@Mutation(_returns => User)
	async registerAdmin(@Arg('input') input: RegisterInput): Promise<User> {
		const hashedPassword = await bcrypt.hash(input.password, 12);
		const user = await User.create({
			name: input.name,
			email: input.email,
			password: hashedPassword,
			role: UserRole.ADMIN,
		}).save();
		return user;
	}
}

export default RegisterAdminResolver;
