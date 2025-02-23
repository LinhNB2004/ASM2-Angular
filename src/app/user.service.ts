import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  Register(user: User) {
    return this.http.post(`${this.baseURL}/register`, user);
  }
  Login(user: User) {
    return this.http.post(`${this.baseURL}/login`, user);
  }
}
