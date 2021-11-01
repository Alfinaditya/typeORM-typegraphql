import { Field, InputType } from 'type-graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
class UpdateAuthorInput {
	@Field()
	@IsUUID()
	id!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	value!: string;
}

export default UpdateAuthorInput;
