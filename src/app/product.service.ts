import { HttpClient } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';
import { Product } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productList = signal<Product[]>([]);

  public formValue = signal<any>('');

  public cartItems = signal<any>([]);
  constructor(public _http: HttpClient) {
    effect(() => {
    
    });
  }

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

 addToCart(product: Product, qty: number) {
    const items = this.cartItems();
    const existing = items.find((i: any) => i.product.id == product.id);
    if (existing) {
      existing.qty += qty;
      existing.subtotal = existing.qty * existing.product.price;
    } else {
      items.push({
        product,
        qty,
        subtotal: product.price * qty
      });
    }

    this.cartItems.set([...items]);
  }

  removeFromCart() {
    this.cartItems.set([]);
  //   const items = [...this.cartItems()];
  //   const index = items.findIndex((item) => item.product.id == product.id);
  //   if (index !== -1) {
  //     items.splice(index, 1); 
  //     this.cartItems.set(items);
  //   }
  }
}
