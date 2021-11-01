import { Arg, Mutation, Resolver } from 'type-graphql';
import { Book } from '../../entities/book';
import { IsAuth } from '../middlewares/IsAuth';
import AddBookInput from './input/AddBookInput';

@Resolver()
class AddBookResolver {
	// @IsAuth()
	@Mutation(_retuns => Book)
	async addBook(@Arg('input') input: AddBookInput): Promise<Book> {
		console.log(input);
		const book = await Book.create({
			name: input.name,
			pages: input.pages,
			releaseYear: input.releaseYear,
			author: {
				id: input.authorId,
			},
		}).save();

		return book;
	}
}

export default AddBookResolver;
