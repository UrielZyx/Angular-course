import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ex8q2Service } from '../ex8q2.service';

@Component({
  selector: 'app-ex8q2master',
  templateUrl: './ex8q2master.component.html',
  styleUrls: ['./ex8q2master.component.css']
})
export class Ex8q2masterComponent implements OnInit {

  users: any[] = []

  sub: Subscription = new Subscription

  constructor(private service: Ex8q2Service) { }

  ngOnInit(): void {
    this.sub = this.service.getAllUsers()
      .subscribe(u => this.users = u)
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
