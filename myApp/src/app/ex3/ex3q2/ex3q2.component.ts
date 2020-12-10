import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3q2',
  templateUrl: './ex3q2.component.html',
  styleUrls: ['./ex3q2.component.css']
})
export class Ex3q2Component implements OnInit {

  isRedChecked:boolean = false;
  isBlueChecked:boolean = false;
  isGreenChecked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
