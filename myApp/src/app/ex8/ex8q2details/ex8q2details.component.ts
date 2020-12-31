import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ex8q2Service } from '../ex8q2.service';

@Component({
  selector: 'app-ex8q2details',
  templateUrl: './ex8q2details.component.html',
  styleUrls: ['./ex8q2details.component.css']
})
export class Ex8q2detailsComponent implements OnInit {

  user: any = {}

  constructor(private route: ActivatedRoute, private users: Ex8q2Service) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(p => {
        this.users.getUser(p["id"])
          .subscribe(u => this.user = u)
      })
  }

}
