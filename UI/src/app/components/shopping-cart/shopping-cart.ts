import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Cart } from '../cart/cart';

@Component({
  imports: [ProductList, Cart],
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {}
