import { NonEmptyArray } from 'type-graphql';
import DeleteAuthorByIdResolver from './author/DeleteAuthorByIdResolver';
import AddAuthorResolver from './author/AddAuthorResolver';
import GetAllAuthorsResolver from './author/GetAllAuthorsResolver';
import GetAuthorByIdResolver from './author/GetAuthorByIdResolver';
import AddBookResolver from './book/AddBookResolver';
import GetAllBooksResolver from './book/GetAllBooksResolver';
import LoginResolver from './user/Login';
import RegisterResolver from './user/Register';
import GetAllUsersResolver from './admin/GetAllUsersResolver';
import DeleteUserByIdResolver from './admin/DeleteUserByIdResolver';
import DeleteBookByIdResolver from './book/DeleteBookByIdResolver';
import GetBookByIdResolver from './book/GetBookByIdResolver';
import LogoutResolver from './user/Logout';
import UpdateAuthorResolver from './author/UpdateAuthorResolver';
import RegisterAdminResolver from './admin/RegisterAdmin';
import AuthorBookRelationsResolver from './relations/AuthorBookRelationsResolver';

const resolvers = [
	LoginResolver,
	LogoutResolver,
	RegisterResolver,
	AddBookResolver,
	DeleteBookByIdResolver,
	AddAuthorResolver,
	GetAllAuthorsResolver,
	DeleteAuthorByIdResolver,
	GetAllBooksResolver,
	GetAuthorByIdResolver,
	UpdateAuthorResolver,
	GetBookByIdResolver,
	GetAllUsersResolver,
	DeleteUserByIdResolver,
	RegisterAdminResolver,
	AuthorBookRelationsResolver,
] as unknown as NonEmptyArray<Function>;

export default resolvers;
