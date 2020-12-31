import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ex6q3Service } from '../ex6q3.service';

@Component({
  selector: 'app-ex6q3tasks',
  templateUrl: './ex6q3tasks.component.html',
  styleUrls: ['./ex6q3tasks.component.css']
})
export class Ex6q3tasksComponent implements OnInit {

  id: number = 0
  tasks: any[] = []

  subs: Subscription[] = []

  constructor(private route: ActivatedRoute, private users: Ex6q3Service) { }

  ngOnInit(): void {
    this.subs[0] = this.route.params
      .subscribe(p => {
        this.id = p['id']
        this.subs[1] = this.users
          .getAllTasksByUserId(this.id)
          .subscribe(t => this.tasks = t)
      })
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe())
  }

}
