import { Component, Input, OnInit } from '@angular/core';
import { Ex6q3Service } from '../ex6q3.service';

@Component({
  selector: 'app-ex6q3-child',
  templateUrl: './ex6q3-child.component.html',
  styleUrls: ['./ex6q3-child.component.css']
})
export class Ex6q3ChildComponent implements OnInit {

  @Input()
  user: any
  areTasksVisible: boolean = false
  tasks: any[] = []

  constructor(private service: Ex6q3Service) { }

  ngOnInit(): void {
  }

  showTasks():void {
    this.areTasksVisible = true
    this.service.getAllTasksByUserId(this.user.id)
    // this.service.getAllTasks()
      .subscribe(taskList => {
        this.tasks = taskList
          // .filter(t => t.userId == this.user.id)
          .slice(0,3)
      })
  }
}