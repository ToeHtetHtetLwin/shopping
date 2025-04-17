import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    FloatLabelModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  public value: string = '';
  public loading=false;
  logIn() {
    this.loading = true;

    // Simulate login delay
    setTimeout(() => {
      this.loading = false;
      console.log('Logged in!');
      // Navigate or do something after login
    }, 2000);
    this.router.navigate(['/main']);
  }

  
}
