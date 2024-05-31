import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    if (token && role === '1') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
