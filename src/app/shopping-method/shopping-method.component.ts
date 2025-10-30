import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-shopping-method',
  standalone: true,
  imports: [
    FormsModule,
    RadioButtonModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './shopping-method.component.html',
  styleUrl: './shopping-method.component.css',
})
export class ShoppingMethodComponent {
  public selectedCategory: any = null;
  categories: any[] = [
    { name: 'Credit Card', key: 'C' },
    { name: 'Paypal', key: 'P' },
    { name: 'Cash on delivery', key: 'D' },
  ];

  constructor(private _router: Router) {}
  ngOnInit() {
    this.selectedCategory = this.categories[1];
  }

  goToReview() {
    this._router.navigate(['main/review']);
  }
}
