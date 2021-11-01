import { Arg, Query, Resolver } from 'type-graphql';
import { Book } from '../../entities/book';
import { IsAuth } from '../middlewares/IsAuth';
import IdInput from '../shared/IdInput';

@Resolver()
class GetBookByIdResolver {
	// @IsAuth()
	@Query(_retuns => Book)
	getBookById(@Arg('input') input: IdInput): Promise<Book | undefined> {
		return Book.findOne({
			where: { id: input.id },
		});
	}
}

export default GetBookByIdResolver;
