import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex8q1age-input',
  templateUrl: './ex8q1age-input.component.html',
  styleUrls: ['./ex8q1age-input.component.css']
})
export class Ex8q1ageInputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(age: number) {
    sessionStorage['age'] = age
    this.router.navigate(["display"])
  }

}
