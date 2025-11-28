import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProductService } from '../product.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent implements OnInit {
  public shippingForm!: FormGroup;
  #service = inject(ProductService);

  public cities = [
    { name: 'Yangon', code: 'Y' },
    { name: 'Magway', code: 'M' },
    { name: 'Myawady', code: 'MY' },
    { name: 'Mandalay', code: 'MD' },
    { name: 'Taungyi', code: 'T' },
    { name: 'Sagaing', code: 'S' },
  ];
  constructor(private _router: Router) {}

  ngOnInit() {
    this.shippingForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      selectedCity:new FormControl('',Validators.required)
    });
  }

  goToPayment() {
    console.log('form>>>>>>>>>>>>>>>', this.shippingForm.value);
    console.log(
      'shipping form>>>>>>>>>',
      this.shippingForm.get('firstname')?.value
    );
    this.#service.formValue.set(this.shippingForm.value);
    this._router.navigate(['main/shopping-method']);
  }
}
