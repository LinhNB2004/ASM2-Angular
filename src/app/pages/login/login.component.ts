import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/User';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { LayoutAdminComponent } from '../../Components/layout-admin/layout-admin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutAdminComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {} as User;
  userForm: FormGroup = {} as FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {}
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  handleSubmit() {
    if (this.userForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;
      const user = { email, password };

      this.userService.Login(user).subscribe({
        next: (data: any) => {
          const token = data.accessToken;
          const role = data.user?.role; // sd ? để tránh data k tồn tại

          localStorage.setItem('accessToken', token);
          localStorage.setItem('Role', role?.toString() || ''); // || để role không được đặt giá trị undefined

          console.log('Đăng nhập thành công:', data);
          alert('Đăng nhập thành công');
          if (role === 1) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          alert('Tài khoản hoặc mật khẩu không đúng');
          console.error('Đăng nhập thất bại:', err);
        },
      });
    } else {
      alert('form không hợp lệ!');
      console.log('form không hợp lệ!');
    }
  }
}
