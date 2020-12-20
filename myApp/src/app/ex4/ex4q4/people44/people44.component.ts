import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people44',
  templateUrl: './people44.component.html',
  styleUrls: ['./people44.component.css']
})
export class People44Component implements OnInit {

  people: any = [{
    name : 'Avi',
    tasks : [{
      title : 'Task A',
      completed : true
    },
    {
      title : 'Task B',
      completed : false
    }]
  },
  {
    name : 'Dana',
    tasks : [{
      title : 'Task C',
      completed : false
    },
    {
      title : 'Task D',
      completed : true
    }]
  }
]

  constructor() { }

  ngOnInit(): void {
  }
}
