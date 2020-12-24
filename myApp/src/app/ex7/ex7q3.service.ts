import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class Ex7q3Service {

  constructor(private http: HttpClient) { }

  usersEndpoint: string = "https://jsonplaceholder.typicode.com/users/"

  getUser(id: number) : Observable<any> {
    return this.http.get<any>(this.usersEndpoint + id)
  }
  
  updateUser(user: any) {
    this.http.put(this.usersEndpoint + user.id, user)
    .subscribe(() => {})
  }
}
