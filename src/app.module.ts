import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { VendorModule } from './vendor/vendor.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { VendorController } from './vendor/vendor.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestdb'),
    UserModule, 
    VendorModule,
    ProductModule,
    CartModule,
  ],
  controllers: [VendorController],
})
export class AppModule {}
