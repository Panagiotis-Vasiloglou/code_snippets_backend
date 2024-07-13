import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
	@Prop({ required: true })
	username: string;

	@Prop({ required: true, select: false })
	password: string;

	@Prop({ required: true, unique: true })
	email: string;

	@Prop()
	avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
