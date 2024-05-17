import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SlideComponent } from './Components/slide/slide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    NotFoundComponent,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    LoginComponent,
    SlideComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WD18332';
}
