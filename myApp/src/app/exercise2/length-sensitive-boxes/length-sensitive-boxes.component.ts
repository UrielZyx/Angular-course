import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-length-sensitive-boxes',
  templateUrl: './length-sensitive-boxes.component.html',
  styleUrls: ['./length-sensitive-boxes.component.css']
})
export class LengthSensitiveBoxesComponent implements OnInit {

  first: String = ""
  second: String = ""
  label1: String = ""
  label2: String = ""

  constructor() { }

  ngOnInit(): void {
  }

  updateFirst(txt : string) :void {
    this.first = txt
    this.swapIfNeeded()
  }

  updateSecond(txt: string) :void {
    this.second = txt
    this.swapIfNeeded()
  }

  swapIfNeeded() : void {
    if(this.first.length > 4 || this.second.length > 4) {
      this.label1 = this.second
      this.label2 = this.first
    } else {
      this.label1 = this.first
      this.label2 = this.second
    }
  }
}
