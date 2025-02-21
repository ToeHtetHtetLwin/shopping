import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImageModule, CardModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(public router: Router) {}
  goToHeader() {
    this.router.navigate(['/main']);
  }
}
