import { Query, Resolver } from 'type-graphql';
import { Book } from '../../entities/book';

@Resolver()
class GetAllBooksResolver {
	// @IsAuth()
	@Query(_retuns => [Book])
	getAllBooks(): Promise<Book[]> {
		return Book.find();
	}
}

export default GetAllBooksResolver;
