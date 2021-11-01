import { Query, Resolver } from 'type-graphql';
import { Author } from '../../entities/author';
import { IsAuth } from '../middlewares/IsAuth';

@Resolver()
class AuthorBookRelationsResolver {
	// @IsAuth()
	@Query(_retuns => [Author])
	getAuthorBookRelations(): Promise<Author[]> {
		return Author.find({ relations: ['books'] });
	}
}

export default AuthorBookRelationsResolver;
