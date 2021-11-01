import { Arg, Mutation, Resolver } from 'type-graphql';
import { Author } from '../../entities/author';
import { IsAuth } from '../middlewares/IsAuth';
import IdInput from '../shared/IdInput';

@Resolver()
class DeleteAuthorByIdResolver {
	// @IsAuth()
	@Mutation(_retuns => Boolean)
	async deleteAuthorById(@Arg('input') input: IdInput): Promise<boolean> {
		const book = await Author.delete({ id: input.id });
		if (book.affected === 0) return false;
		return true;
	}
}

export default DeleteAuthorByIdResolver;
