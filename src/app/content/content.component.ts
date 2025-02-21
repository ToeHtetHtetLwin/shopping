import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ButtonModule, CarouselModule, TagModule,InputTextModule,IconFieldModule,InputIconModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  products = [
    {
      image: 'b1.jpeg',
      name: 'Fresh Bread',
      price: 3.99,
      inventoryStatus: 'In Stock',
    },
    {
      image: 'b2.jpeg',
      name: 'Fresh Orange',
      price: 2.99,
      inventoryStatus: 'Out Of Stock',
    },
    {
      image: 'b3.jpeg',
      name: 'Fresh Apple',
      price: 4.99,
      inventoryStatus: 'In Stock',
    },
    {
      image: 'b4.jpeg',
      name: 'Fresh milk',
      price: 3.99,
      inventoryStatus: 'In Stock',
    },
    {
      image: 'b5.jpeg',
      name: 'Fresh peanut',
      price: 3.99,
      inventoryStatus: 'In Stock',
    },
    {
      image: 'b6.jpeg',
      name: 'Fresh Fish',
      price: 3.99,
      inventoryStatus: 'In Stock',
    },
    {
      image: 'b7.jpeg',
      name: 'Fresh Meat',
      price: 3.99,
      inventoryStatus: 'Out of Stock',
    },
  ];
}
