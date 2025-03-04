import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

  constructor(private _productService: ProductService) {}

  public cartItems: Product[] = [];
  
  ngOnInit() {
    this.cartItems = this._productService.getCartItems();
  }

  removeItem(product: Product) {
    this._productService.removeFromCart(product);
    this.cartItems = this._productService.getCartItems();
  }
}
