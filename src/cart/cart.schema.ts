import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../product/product.schema';
import { User } from '../users/user.schema';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user_id: Types.ObjectId;  // The user who owns the cart

  @Prop({
    type: [
      {
        product_id: { type: Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
      }
    ],
    required: true,
  })
  items: { product_id: Types.ObjectId; quantity: number }[];

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
