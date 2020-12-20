import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task44',
  templateUrl: './task44.component.html',
  styleUrls: ['./task44.component.css']
})
export class Task44Component implements OnInit {

  @Input()
  taskData: any

  constructor() { }

  ngOnInit(): void {
  }

}
