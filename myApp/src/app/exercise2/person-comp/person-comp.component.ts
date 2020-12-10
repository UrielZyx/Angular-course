import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-comp',
  templateUrl: './person-comp.component.html',
  styleUrls: ['./person-comp.component.css']
})
export class PersonCompComponent implements OnInit {

  value1 : String = "Uriel"
  value2 : String = "29"

  constructor() { }

  ngOnInit(): void {
  }

  swap() : void {
    var tmp : String = this.value1
    this.value1 = this.value2
    this.value2 = tmp
  }

}
