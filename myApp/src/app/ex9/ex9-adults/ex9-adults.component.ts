import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IState } from 'src/app/reducer';

@Component({
  selector: 'app-ex9-adults',
  templateUrl: './ex9-adults.component.html',
  styleUrls: ['./ex9-adults.component.css']
})
export class Ex9AdultsComponent implements OnInit {

  users: Observable<any[]> = new Observable()

  constructor(private store: Store<{reducer: IState}>) { }

  ngOnInit(): void {
    this.users = this.store.select(data => data.reducer.users.filter(user => user.age > 18))
  }

}
