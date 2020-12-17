import { Component, Input, OnInit } from '@angular/core';
import { Person41 } from '../person41';

@Component({
  selector: 'app-child41',
  templateUrl: './child41.component.html',
  styleUrls: ['./child41.component.css']
})
export class Child41Component implements OnInit {


  @Input()
  person: Person41 = new Person41()

  constructor() { }

  ngOnInit(): void {
  }

}
