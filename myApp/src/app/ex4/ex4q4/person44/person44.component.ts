import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person44',
  templateUrl: './person44.component.html',
  styleUrls: ['./person44.component.css']
})
export class Person44Component implements OnInit {

  @Input()
  personData: any

  constructor() { }

  ngOnInit(): void {
  }

}
