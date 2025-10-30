import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../product.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-order',
  standalone: true,
  imports: [ButtonModule, ReactiveFormsModule],
  templateUrl: './review-order.component.html',
  styleUrl: './review-order.component.css',
})
export class ReviewOrderComponent {
  #service = inject(ProductService);
  public cartItems = computed(() => this.#service.cartItems());
  public totalPrice = computed(() => {
    let total = 0;
    this.cartItems().forEach((item) => (total += item.price));
    return total;
  });
  public shippingForm = computed(() => this.#service.formValue());

  confirmOrder() {}
}
