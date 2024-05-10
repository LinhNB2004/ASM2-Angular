import { ProductListComponent } from './product-list/product-list.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    HomePageComponent,
    NotFoundComponent,
    FormsModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WD18332';
  user = {
    name: 'LÊ THỊ THÙY LINH',
    age: 20,
    address: 'Ninh Bình',
    email: 'linhlinh26052004@gmail.com',
  };
  hello() {
    console.log('Xin chào!');
  }
  showInfor() {
    console.log('Hien thi thong tin ca nhan!');
  }
}
