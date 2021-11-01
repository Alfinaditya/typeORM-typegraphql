import { Arg, Mutation, Resolver } from 'type-graphql';
import { Author } from '../../entities/author';
import { IsAuth } from '../middlewares/IsAuth';
import AddAuthorInput from './input/AddAuthorInput';

@Resolver()
class AddAuthorResolver {
	// @IsAuth()
	@Mutation(_retuns => Author)
	async addAuthor(@Arg('input') input: AddAuthorInput): Promise<Author> {
		const author = await Author.create({ name: input.name }).save();
		return author;
	}
}

export default AddAuthorResolver;
