import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productList = signal<Product[]>([]);
  public cartItems: Product[] = [];

  constructor(public _http: HttpClient) {}

  /**
   * Make Http Get Call for product List
   */
  fetchProductList() {
    const url = `https://fakestoreapi.com/products`;
    this._http.get<Product[]>(url).subscribe({
      next: (resp: Product[]) => {
        if (resp) {
          this.productList.set(resp);
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.productList.set([]);
      },
    });
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id); 
  }

  getCartCount(): number {
    return this.cartItems.length;
  }
}
