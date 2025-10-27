import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../product.service';
import { Product } from '../product-model';
import { CardModule } from 'primeng/card';
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
    CardModule,
  ],

  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  public searchKeyword = signal<any>('');

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

  public filteredProducts = computed(() =>
    this.productList().filter((product) =>
      product.category
        .toLowerCase()
        .includes(this.searchKeyword().toLowerCase())
    )
  );

  addToCart(product: Product) {
    this._productService.addToCart(product);
  }
}
