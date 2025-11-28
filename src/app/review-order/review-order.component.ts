import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-review-order',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './review-order.component.html',
  styleUrl: './review-order.component.css',
})
export class ReviewOrderComponent {
  #service = inject(ProductService);
  public cartItems = computed(() => this.#service.cartItems());
  // public totalPrice = computed(() => {
  //   let total = 0;
  //   this.cartItems().forEach((item) => (total += item.product.price));
  //   return total;
  // });
  public shippingForm = computed(() => this.#service.formValue());
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to confirm the order?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Order Confirmed Successfully',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Order Rejected',
          life: 3000,
        });
      },
    });
  }
}
