import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from './product-model';



@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productList = signal<Product[]>([]); // Start with an empty list of products
  constructor(public _http: HttpClient) {}

  fetchProductList() {
    const url = `https://fakestoreapi.com/products`;

    this._http.get<Product[]>(url).subscribe({ // Tell Angular it’s a list of Products
      next: (resp: Product[]) => {
        if (resp) {
          this.productList.set(resp); // Set the Signal with the list of products
          console.log('this is res data',this.productList());

        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.productList.set([]); // If there’s an error, use an empty list
      },
    });
  }
}