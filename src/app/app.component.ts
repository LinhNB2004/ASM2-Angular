import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NotFoundComponent,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    LoginComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WD18332';
}
