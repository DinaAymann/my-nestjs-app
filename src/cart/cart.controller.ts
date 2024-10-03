import { Controller, Post, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':userId/add')
  async addProductToCart(
    @Param('userId') userId: string,
    @Body('product_id') productId: string,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.addProductToCart(userId, productId, quantity);
  }
}
