import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true, enum: ['admin', 'tech_support', 'sales', 'consumer', 'rider', 'vendor'] })
  role: string;

  @Prop({ type: [{ address: String }] }) // Array of addresses
  addresses: string[];

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop()
  last_login: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
