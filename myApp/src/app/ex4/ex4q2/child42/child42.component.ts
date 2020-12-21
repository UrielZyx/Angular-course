import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person42 } from '../person42';

@Component({
  selector: 'app-child42',
  templateUrl: './child42.component.html',
  styleUrls: ['./child42.component.css']
})
export class Child42Component implements OnInit {

  person: Person42 = new Person42()

  @Output()
  add: EventEmitter<Person42> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  addPerson(): void {
    this.add.emit(this.person.clone())
  }
}