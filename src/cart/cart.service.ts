import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from './cart.schema';
import { ProductService } from '../product/product.service';  // To check product existence

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    private productService: ProductService,  // Inject ProductService to validate products
  ) {}

  async addProductToCart(user_id: string, product_id: string, quantity: number) {
    // Validate if the product exists
    const product = await this.productService.findById(product_id);
    if (!product) {
      throw new Error('Product not found');
    }

    // Find or create the user's cart
    let cart = await this.cartModel.findOne({ user_id });
    if (!cart) {
      cart = new this.cartModel({
        user_id,
        items: [{ product_id, quantity }],
      });
    } else {
      // Check if the product is already in the cart
      const productIndex = cart.items.findIndex(
        (item) => item.product_id.toString() === product_id
      );
      
      if (productIndex > -1) {
        // If the product exists in the cart, update the quantity
        cart.items[productIndex].quantity += quantity;
      } else {
        // If the product doesn't exist in the cart, add it as a new item
        cart.items.push({ product_id: new Types.ObjectId(product_id), quantity });
      }
    }

    // Save the cart
    return cart.save();
  }

  async getCartByUserId(user_id: string) {
    return this.cartModel.findOne({ user_id }).populate('items.product_id').exec();
  }
}
