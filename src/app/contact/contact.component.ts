import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputTextModule, CardModule, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(public router: Router) {}

  goToHeader() {
    this.router.navigate(['/main']);
  }
}
