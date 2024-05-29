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
import { HeaderComponent } from '../../Components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
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

      this.userService.Login(user).subscribe(
        (data) => {
          console.log('Đăng nhập thành công:', data);
          alert('Đăng nhập thành công, Chuyển hướng sang home');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Đăng nhập thất bại:', error);
        }
      );
    }
  }
}
