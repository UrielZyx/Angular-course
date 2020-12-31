import { Component, OnInit } from '@angular/core';
import { Ex8q2Service } from '../ex8q2.service';

@Component({
  selector: 'app-ex8q2master',
  templateUrl: './ex8q2master.component.html',
  styleUrls: ['./ex8q2master.component.css']
})
export class Ex8q2masterComponent implements OnInit {

  users: any[] = []

  constructor(private service: Ex8q2Service) { }

  ngOnInit(): void {
    this.service.getAllUsers()
      .subscribe(u => this.users = u)
  }

}
