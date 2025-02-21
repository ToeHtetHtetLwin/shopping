import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router, RouterOutlet } from '@angular/router';
import { ContentComponent } from '../content/content.component';
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
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  public isDarkMode: boolean = false;

  /**
   *Toggle dark mode on the body element
   */
  toggle() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Create an EventEmitter
  @Output() sidebarToggle = new EventEmitter<void>();

  // Send event when menu button is clicked
  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  //Go To About Page when click on about
  gotoAbout() {
    this.router.navigate(['main/about']);
  }

  //Go to contact page when click on contact
  goToContact() {
    this.router.navigate(['main/contact']);
  }
}
