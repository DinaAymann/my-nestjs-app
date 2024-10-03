import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VendorDocument = Vendor & Document;

@Schema()
export class Vendor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  vendor_id: string;  // This will link to the vendor (User) who owns the vendor

  @Prop()
  location: string;  // Embedded address information

  @Prop({ type: [String] })
  categories: string[];

  @Prop({ default: true })
  is_open: boolean;

  @Prop()
  rating: number;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
