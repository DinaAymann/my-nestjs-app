import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  discount: number;  // Optional field for promotions

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  stock_quantity: number;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Shop', required: true })
  shop_id: Types.ObjectId;

  @Prop()
  image_url: string;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
