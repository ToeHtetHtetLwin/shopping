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
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { Router } from '@angular/router';
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
    DividerModule,
    ConfirmDialogModule,
    ToastModule,
    InputNumberModule,
  ],
  providers: [ConfirmationService, MessageService],

  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  public searchKeyword = signal<any>('');

  public productList = computed<Product[]>(() =>
    this._productService.productList()
  );
  public qty = signal<number>(1);
  public cartItems: Product[] = [];
  public quantity: number = 1;
  private selectedProduct = signal<any>('');
  public totalPrice = signal<number>(1);
  constructor(
    private _productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private _router: Router
  ) {
    effect(()=>{
    })
  }

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

  /**
   * Confirm dialog when click on add to cart button
   */
  confirm(product: Product) {
  this.selectedProduct.set(product);
  this.confirmationService.confirm({
    message: `Price: ${product.price}`,
    accept: () => {
      this._productService.addToCart(this.selectedProduct(),this.qty());
      this.messageService.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Added To Cart Successfully',
        life: 3000,
      });
    },
    reject: () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Cancelled',
        detail: 'Order Cancelled',
        life: 3000,
      });
    },
  });
}

  /**
   * Effect tracking Qty to calculate total price
   */
  priceEff = effect(
    () => {
      if (this.qty() && this.selectedProduct()) {
        const price = Math.round(this.qty() * this.selectedProduct().price);
        this.totalPrice.set(price);
      }
    },
    { allowSignalWrites: true }
  );

  goToCheckOut() {
    this._router.navigate(['main/cart']);
  }
}
