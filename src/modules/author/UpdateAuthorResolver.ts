import { Arg, Mutation, Resolver } from 'type-graphql';
import { Author } from '../../entities/author';
import { IsAuth } from '../middlewares/IsAuth';
import UpdateAuthorInput from './input/UpdateAuthorInput';

@Resolver()
class UpdateAuthorResolver {
	// @IsAuth()
	@Mutation(_retuns => Boolean)
	async updateAuthor(@Arg('input') input: UpdateAuthorInput): Promise<boolean> {
		const author = await Author.update({ id: input.id }, { name: input.value });
		if (author.affected === 0) return false;
		return true;
	}
}

export default UpdateAuthorResolver;
