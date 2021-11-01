import { User } from '../../entities/user';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { IsAuth } from '../middlewares/IsAuth';
import { IsAdmin } from '../middlewares/IsAdmin';
import IdInput from '../shared/IdInput';

@Resolver()
class DeleteUserByIdResolver {
	@IsAuth()
	@IsAdmin()
	@Mutation(_retuns => Boolean)
	async deleteUserById(@Arg('input') input: IdInput): Promise<Boolean> {
		const user = await User.delete({ id: input.id });
		if (user.affected === 0) return false;
		return true;
	}
}

export default DeleteUserByIdResolver;
