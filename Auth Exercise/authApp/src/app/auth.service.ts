import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    return this.http.post("http://localhost:8000/api/auth/login", {
      "username": userName,
      "password": password
    })
  }

  authenticate(response: any): boolean {
    sessionStorage["token"] = response.token
    sessionStorage["role"] = response.role
    return response.auth
  }

  getRole(): string {
    return sessionStorage["role"]
  }

  getToken(): string {
    return sessionStorage["token"]
  }
}
