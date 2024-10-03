import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart, CartSchema } from './cart.schema';
import { ProductModule } from '../product/product.module';  // For fetching product details

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    ProductModule,  // Import the Product module to interact with the Product schema
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
