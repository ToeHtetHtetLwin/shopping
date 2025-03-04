import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../product.service';
import { Product } from '../product-model';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ButtonModule,
    CarouselModule,
    TagModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    CommonModule,
    FormsModule,
  ],

  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  searchKeyword: string = '';

  public productList = computed<Product[]>(() =>
    this._productService.productList()
  );
  public cartItems: Product[] = [];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._productService.fetchProductList();
  }

  get filteredProducts() {
    return this.productList().filter((product) =>
      product.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  addToCart(product: Product) {
    this._productService.addToCart(product);
  }
}
