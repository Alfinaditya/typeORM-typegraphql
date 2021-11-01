import { Field, InputType } from 'type-graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
class AddAuthorInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	name!: string;
}

export default AddAuthorInput;
