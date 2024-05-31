import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss',
})
export class LayoutAdminComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router) {}
  logout() {
    // Xóa token và thông tin khác liên quan khỏi localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    alert('Đăng xuất thành công!');
    this.router.navigate(['/']);
  }
}
