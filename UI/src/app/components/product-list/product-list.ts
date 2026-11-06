import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  @Input() products: Product[] = [];
  @Input() cartItems: Product[] = [];

  @Output() addToCart = new EventEmitter<Product>();
}
