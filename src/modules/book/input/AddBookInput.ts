import { Field, InputType } from 'type-graphql';
import { IsNotEmpty, IsString, IsInt, IsUUID } from 'class-validator';

@InputType()
class AddBookInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	name!: string;

	@Field()
	@IsNotEmpty()
	@IsInt()
	pages!: number;

	@Field({ nullable: true })
	@IsInt()
	releaseYear?: number;

	@Field()
	@IsNotEmpty()
	@IsUUID()
	authorId!: string;
}

export default AddBookInput;
