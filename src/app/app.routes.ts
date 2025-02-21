import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route to login
  { path: 'login', component: LoginComponent }, // Login route
  {
    path: 'main', // Route for the logged-in layout
    component: MainComponent, // Display MainComponent that contains header/sidebar
    children: [
      { path: '', component: ContentComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }, // Child route under the main layout
    ],
  },
];
