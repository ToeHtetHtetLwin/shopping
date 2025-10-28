import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
export class ShippingComponent implements OnInit {
  public shippingForm!: FormGroup;
  constructor(private _router: Router) {}

  ngOnInit() {
    this.shippingForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });
  }

  goToPayment() {
    console.log('form>>>>>>>>>>>>>>>', this.shippingForm.value);
    console.log(
      'shipping form>>>>>>>>>',
      this.shippingForm.get('firstname')?.value
    );

    this._router.navigate(['main/shopping-method']);
  }
}
