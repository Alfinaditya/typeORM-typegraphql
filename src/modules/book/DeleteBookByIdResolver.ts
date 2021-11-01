import { Arg, Mutation, Resolver } from 'type-graphql';
import { Book } from '../../entities/book';
import { IsAuth } from '../middlewares/IsAuth';
import IdInput from '../shared/IdInput';

@Resolver()
class DeleteBookByIdResolver {
	// @IsAuth()
	@Mutation(_retuns => Boolean)
	async deleteBookById(@Arg('input') input: IdInput): Promise<boolean> {
		const book = await Book.delete({ id: input.id });
		if (book.affected === 0) return false;
		return true;
	}
}

export default DeleteBookByIdResolver;
