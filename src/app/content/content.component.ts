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
  public totalPrice: number = 0;
  private selectedProduct = signal<any>('');
  constructor(
    private _productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

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

  /**
   * Confirm dialog when click on add to cart button
   */
  confirm(product: any) {
    console.log('Confrim>>>>>>>>>>>', this.confirm);
    this.selectedProduct.set(product);
    this.confirmationService.confirm({
      header: 'Item Added To Your Cart',
      message: product.price,

      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Add  To Cart Successfully',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Cancel Order',
          life: 3000,
        });
      },
    });
  }

  /**
   * Effect tracking Qty to calculate total price
   */
  priceEff = effect(() => {
    if (this.qty() && this.selectedProduct()) {
      this.totalPrice = Math.round(this.qty() * this.selectedProduct().price);
    }
  });

  /**
   * 
   * @param event Trigger when qty change
   */
  onQtyChange(event: any) {
    this.qty.set(event.value);
  }
}
