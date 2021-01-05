import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  id: number = -1
  tasks: any[] = []

  subs: Subscription[] = []

  constructor(private route: ActivatedRoute, private service: UtilsService) { }

  ngOnInit(): void {
    this.subs[0] = this.route.params
      .subscribe((p) => {
        this.id = p['id']
        this.subs[1] = this.service.getTasks(this.id)
          .subscribe((data) => {
            this.tasks = data
          })
      })
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe())
  }

}
