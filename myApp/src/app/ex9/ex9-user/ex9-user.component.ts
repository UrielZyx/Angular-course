import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/reducer';

@Component({
  selector: 'app-ex9-user',
  templateUrl: './ex9-user.component.html',
  styleUrls: ['./ex9-user.component.css']
})
export class Ex9UserComponent implements OnInit {

  id: number = 0
  name: string = ""
  age: number = 0

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch({type: "ADD", payload: {id: this.id, name: this.name, age: this.age}})
  }

  update() {
    this.store.dispatch({type: "UPDATE", payload: {id: this.id, name: this.name, age: this.age}})
  }

  delete() {
    this.store.dispatch({type: "DELETE", payload: this.id})
  }
}
