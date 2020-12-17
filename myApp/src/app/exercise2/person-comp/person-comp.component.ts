import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-comp',
  templateUrl: './person-comp.component.html',
  styleUrls: ['./person-comp.component.css']
})
export class PersonCompComponent implements OnInit {

  value1 : string = "Uriel"
  value2 : string = "29"

  constructor() { }

  ngOnInit(): void {
  }

  swap() : void {
    var tmp : string = this.value1
    this.value1 = this.value2
    this.value2 = tmp
  }

}
