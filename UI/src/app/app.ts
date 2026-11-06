import { Component, signal } from '@angular/core';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UI');
}
