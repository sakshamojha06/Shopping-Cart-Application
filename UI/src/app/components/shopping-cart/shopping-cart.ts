import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Cart } from '../cart/cart';
import { Product } from '../../models/product';

@Component({
  imports: [ProductList, Cart],
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Keyboard', price: 1000 },
    { id: 3, name: 'Mouse', price: 500 },
    { id: 4, name: 'Monitor', price: 10000 }
  ];

  cartItems: Product[] = [];
  message: string = '';

  get cartCount(): number {
    return this.cartItems.length;
  }

  addToCart(product: Product) {
  const alreadyExists = this.cartItems.some(
    item => item.id === product.id
  );

  if (alreadyExists) {
    this.message = `${product.name} is already in your cart!`;
    return;
  }

  this.cartItems = [...this.cartItems, product];
  this.message = '';
}

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}
