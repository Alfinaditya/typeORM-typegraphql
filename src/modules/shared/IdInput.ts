import { Field, InputType } from 'type-graphql';
import { IsUUID } from 'class-validator';

@InputType()
class IdInput {
	@Field()
	@IsUUID()
	id!: string;
}

export default IdInput;
