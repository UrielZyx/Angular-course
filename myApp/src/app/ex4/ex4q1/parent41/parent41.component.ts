import { Component, OnInit } from '@angular/core';
import { Person41 } from '../person41';

@Component({
  selector: 'app-parent41',
  templateUrl: './parent41.component.html',
  styleUrls: ['./parent41.component.css']
})
export class Parent41Component implements OnInit {

  person: Person41 = new Person41()

  constructor() { }

  ngOnInit(): void {
  }

  changeName(name: string): void {
    this.person.name = name
  }

  changeAge(age: string): void {
    this.person.age = age
  }

  changeLicense(hasLicense: boolean): void {
    this.person.hasLicense = hasLicense
  }

}
