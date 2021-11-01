import { Query, Resolver } from 'type-graphql';
import { Author } from '../../entities/author';
import { IsAuth } from '../middlewares/IsAuth';

@Resolver()
class GetAllAuthorResolver {
	// @IsAuth()
	@Query(_retuns => [Author])
	getAllAuthors(): Promise<Author[]> {
		return Author.find();
	}
}

export default GetAllAuthorResolver;
