import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from '../dto/user.dto';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async createUser(@Body() createUserDTO: CreateUserDTO) {
		return await this.userService.createUser(createUserDTO);
	}
}
