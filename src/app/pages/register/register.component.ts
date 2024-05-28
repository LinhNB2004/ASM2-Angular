import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/User';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
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
      this.userService.createUser(this.userForm.value).subscribe((data) => {
        console.log('Đăng kí thành công', data);
        alert('Đăng kí thành công, Chuyển hướng sang Login');
        this.router.navigate(['/login']);
      });
    }
  }
}
