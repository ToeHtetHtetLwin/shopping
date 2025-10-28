import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-shopping-method',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, CommonModule],
  templateUrl: './shopping-method.component.html',
  styleUrl: './shopping-method.component.css',
})
export class ShoppingMethodComponent {
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Credit Card', key: 'C' },
    { name: 'Paypal', key: 'P' },
    { name: 'Cash on delivery', key: 'D' },
  ];

  ngOnInit() {
    this.selectedCategory = this.categories[1];
  }
}
