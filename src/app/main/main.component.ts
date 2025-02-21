import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  showData: boolean = true;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkRoute();
  }

  // Method to check the current route and decide whether to show data
  checkRoute(): void {
    this.currentRoute = this.router.url;

    // if (this.currentRoute !== 'main') {
    //   this.showData = false;
    // } else {
    //   this.showData = true;
    // }
    this.showData = this.currentRoute == 'main' ? true : false;
  }

  public isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
