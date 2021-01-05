import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "users");
  }

  getTasks(userId: number): Observable<any[]> {
    let url:string = this.baseUrl + "todos/?userId=" + userId
    return this.http.get<any[]>(url);
  }
}
