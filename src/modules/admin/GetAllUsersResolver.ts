import { User } from '../../entities/user';
import { Query, Resolver } from 'type-graphql';
import { IsAuth } from '../middlewares/IsAuth';
import { IsAdmin } from '../middlewares/IsAdmin';

@Resolver()
class GetAllUsersResolver {
	@IsAuth()
	@IsAdmin()
	@Query(_retuns => [User])
	getAllUsers(): Promise<User[]> {
		return User.find();
	}
}

export default GetAllUsersResolver;
