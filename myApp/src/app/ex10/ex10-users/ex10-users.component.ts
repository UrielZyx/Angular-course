import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ex10-users',
  templateUrl: './ex10-users.component.html',
  styleUrls: ['./ex10-users.component.css']
})
export class Ex10UsersComponent implements OnInit {

  users: any[] = []

  sub: Subscription = new Subscription

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
      .subscribe(data => {
        this.users = data
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
