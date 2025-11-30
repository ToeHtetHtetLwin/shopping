import { CommonModule } from '@angular/common';
import { Component, computed, effect } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Product } from '../product-model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    effect(() => {
      console.log('cart>>>>>>>>>>>>', this.cartItems());
    });
  }

  public cartItems = computed(() => this._productService.cartItems());

  ngOnInit() {}


  goToHome() {
    this._router.navigate(['/main']);
  }

  goToShip() {
    this._router.navigate(['main/shipping']);
  }

  clearCart() {
    this._productService.removeFromCart();
  }
}
