import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IState } from 'src/app/reducer';

@Component({
  selector: 'app-ex9-all-users',
  templateUrl: './ex9-all-users.component.html',
  styleUrls: ['./ex9-all-users.component.css']
})
export class Ex9AllUsersComponent implements OnInit {

  users: Observable<any[]> = new Observable()

  constructor(private store: Store<{reducer: IState}>) { }

  ngOnInit(): void {
    this.users = this.store.select(data => data.reducer.ex9)
  }

}
