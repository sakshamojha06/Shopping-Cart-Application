import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  @Input() cartItems: Product[] = [];

  get totalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  get totalItems(): number {
    return this.cartItems.length;
  }
}
