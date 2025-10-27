import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping/shipping.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, LoginComponent,AboutComponent,CommonModule,ShippingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 constructor(public router: Router) {}
  title = 'angularPj';
  
}
