import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex8q1display',
  templateUrl: './ex8q1display.component.html',
  styleUrls: ['./ex8q1display.component.css']
})
export class Ex8q1displayComponent implements OnInit {

  name: string = ""
  age: number = 0

  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage['name']
    this.age = sessionStorage['age']
  }

}
