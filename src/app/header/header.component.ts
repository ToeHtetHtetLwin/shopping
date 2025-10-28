import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  EventEmitter,
  Output,
} from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router, RouterOutlet } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { ProductService } from '../product.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    InputSwitchModule,
    CommonModule,
    FormsModule,
    AvatarModule,
    IconFieldModule,
    InputIconModule,
    RouterOutlet,
    ContentComponent,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private _productService: ProductService
  ) {}
  
  public checked: boolean = false;
  public cartCount = computed(() =>
    this._productService.cartItems().length.toString()
  );

  ngOnInit() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.checked = savedDarkMode === 'true';
      if (this.checked) {
        document.body.classList.add('dark-mode');
      }
    }
  }

  handleChange(event: any) {
    console.log('switch change>>>>>>>>>', event.checked);
    if (event.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', event.checked.toString());
  }

  // Create an EventEmitter
  @Output() sidebarToggle = new EventEmitter<void>();

  // Send event when menu button is clicked
  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  //Go To About Page when click on about
  goToAbout() {
    this.router.navigate(['main/about']);
  }

  //Go To Home Page when click on Home
  goToHome() {
    this.router.navigate(['/main']);
  }

  //Go to contact page when click on contact
  goToContact() {
    this.router.navigate(['main/contact']);
  }

  //Go To Cart page when click on cart icon
  goToCart() {
    this.router.navigate(['main/cart']);
  }
}
