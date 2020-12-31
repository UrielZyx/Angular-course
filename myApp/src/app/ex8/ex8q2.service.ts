import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ex8q2Service {

  baseUrl: string = "http://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }
  
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "users")
  }
  
  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + "users/" + id)
  }
}
