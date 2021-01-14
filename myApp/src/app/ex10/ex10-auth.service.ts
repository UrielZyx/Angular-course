import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ex10AuthService {

  constructor(private http: HttpClient) { }

  login(user: string, pwd: string) {
    return this.http.post("http://localhost:8000/api/auth/login", {username: user, password: pwd})
  }

  save(data: any) {
    sessionStorage["token"] = data.token
    sessionStorage["role"] = data.role
  }

  getToken() {
    return sessionStorage["token"]
  }

  getRole() {
    return sessionStorage["role"]
  }
}
