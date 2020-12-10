import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3q1',
  templateUrl: './ex3q1.component.html',
  styleUrls: ['./ex3q1.component.css']
})
export class Ex3q1Component implements OnInit {

  isRed:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  check(text:String):void {
    if(text.length < 5) {
      this.isRed = false
    } else {
      this.isRed = true
    }
  }
}
