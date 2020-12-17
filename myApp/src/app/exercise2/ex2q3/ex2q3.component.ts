import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2q3',
  templateUrl: './ex2q3.component.html',
  styleUrls: ['./ex2q3.component.css']
})
export class Ex2q3Component implements OnInit {

  x:string = ""
  isChecked:boolean = false
  valueForTesting:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  click(value:boolean) {
    this.isChecked = value
  }

}
