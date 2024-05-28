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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
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
      const { email, password } = this.userForm.value;
      this.userService.loginUser(email, password).subscribe(
        () => {
          console.log('Login thành công');
          alert('Login thành công');
          this.router.navigate(['/']);
        },
        (error) => {
          if (error.status === 401) {
            alert('Email hoặc mật khẩu không đúng');
          } else {
            alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
          }
        }
      );
    }
  }
}
