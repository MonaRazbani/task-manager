// src/users/schemas/user.schema.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ unique: true, required: true })
    username: string;
    @Prop({ unique: true, required: false })
    email?: string;
    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
