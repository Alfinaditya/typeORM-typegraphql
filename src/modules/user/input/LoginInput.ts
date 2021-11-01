import { Field, InputType } from 'type-graphql';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

@InputType()
class LoginInput {
	@Field()
	@IsEmail()
	@IsNotEmpty()
	email!: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	password!: string;
}

export default LoginInput;
