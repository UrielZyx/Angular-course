import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ex8q1ageInputComponent } from '../ex8q1age-input/ex8q1age-input.component';

@Component({
  selector: 'app-ex8q1name-input',
  templateUrl: './ex8q1name-input.component.html',
  styleUrls: ['./ex8q1name-input.component.css']
})
export class Ex8q1nameInputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(name: string) {
    sessionStorage['name'] = name
    this.router.navigate(["age"])
  }
}
