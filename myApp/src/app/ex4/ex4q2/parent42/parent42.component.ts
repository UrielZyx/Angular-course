import { Component, OnInit } from '@angular/core';
import { Person42 } from '../person42';

@Component({
  selector: 'app-parent42',
  templateUrl: './parent42.component.html',
  styleUrls: ['./parent42.component.css']
})
export class Parent42Component implements OnInit {

  people: Person42[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
