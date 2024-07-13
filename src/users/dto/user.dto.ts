import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
	@IsNotEmpty()
	@IsString()
	readonly username: string;

	@IsNotEmpty()
	readonly password: string;

	@IsNotEmpty()
	@IsEmail()
	@IsString()
	readonly email: string;

	@IsNotEmpty()
	@IsString()
	readonly avatar: string;
}
