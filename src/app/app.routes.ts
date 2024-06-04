import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutAdminComponent } from './Components/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', component: DashboardComponent },

      {
        path: 'product-add',
        component: ProductAddComponent,
      },
      {
        path: 'product-update/:id',
        component: ProductUpdateComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
