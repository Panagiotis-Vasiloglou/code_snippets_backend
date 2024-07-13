import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<User>) {}

	async createUser(createUserDTO: CreateUserDTO): Promise<any> {
		const user = await this.userModel.findOne({
			email: createUserDTO.email,
		});

		if (user) {
			throw new HttpException(
				'Email already exists',
				HttpStatus.UNPROCESSABLE_ENTITY,
			);
		}

		const createdUser = await this.userModel.create(createUserDTO);
		return createdUser;
	}
}
