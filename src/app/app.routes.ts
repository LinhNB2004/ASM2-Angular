import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'home',
    redirectTo: '/',
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
