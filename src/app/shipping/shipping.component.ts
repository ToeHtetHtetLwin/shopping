import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent {
  public shippingForm!: FormGroup;

  goToPayment() {}

  onSubmit() {}
}
