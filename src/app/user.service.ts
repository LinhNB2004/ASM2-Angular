import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post(`${this.baseURL}`, user);
  }
  loginUser(email: string, password: string) {
    return this.http.post<User | null>(`${this.baseURL}/login`, {
      email,
      password,
    });
  }
}
