import { Arg, Query, Resolver } from 'type-graphql';
import { Author } from '../../entities/author';
import { IsAuth } from '../middlewares/IsAuth';
import IdInput from '../shared/IdInput';

@Resolver()
class GetAuthorByIdResolver {
	// @IsAuth()
	@Query(_retuns => Author)
	getAuthorById(@Arg('input') input: IdInput): Promise<Author | undefined> {
		return Author.findOne({
			where: { id: input.id },
		});
	}
}

export default GetAuthorByIdResolver;
