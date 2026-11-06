import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  @Input() cartItems: Product[] = [];

  @Output() removeFromCart = new EventEmitter<number>();

  selectedProductId: number | null = null;

  onRemove(id: number) {
    this.removeFromCart.emit(id);
  }

  get totalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  get totalItems(): number {
    return this.cartItems.length;
  }

  confirmRemove(id: number) {
    this.selectedProductId = id;
  }

  cancelRemove() {
    this.selectedProductId = null;
  }

  removeProduct() {
    if(this.selectedProductId != null) {
      this.removeFromCart.emit(this.selectedProductId);
      this.selectedProductId = null;
    }
  }
}
