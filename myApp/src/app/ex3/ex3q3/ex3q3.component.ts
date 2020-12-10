import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-ex3q3',
  templateUrl: './ex3q3.component.html',
  styleUrls: ['./ex3q3.component.css']
})
export class Ex3q3Component implements OnInit {

  users:User[] = [new User("Dana", 20, "Haifa"),
                  new User("Ron", 22, "Tel Aviv"),
            new User("Dov", 31, "Ashdod"),
            new User("Vered", 19, "Eilat")]

  constructor() { }

  ngOnInit(): void {
  }

}
