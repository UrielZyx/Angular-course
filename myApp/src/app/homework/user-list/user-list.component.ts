import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = []

  sub: Subscription = new Subscription

  constructor(private service: UtilsService) { }

  ngOnInit(): void {
    this.sub = this.service.getUsers()
      .subscribe((data) => {this.users = data})
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
