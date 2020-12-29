import { Component, OnInit } from '@angular/core';
import { Ex6q3Service } from '../ex6q3.service';

@Component({
  selector: 'app-ex6q3',
  templateUrl: './ex6q3.component.html',
  styleUrls: ['./ex6q3.component.css']
})
export class Ex6q3Component implements OnInit {

  users: any[] = []
  
  constructor(private service: Ex6q3Service) { }

  ngOnInit(): void {
    this.service.getAllUsers()
      .subscribe(u => this.users = u)
  }

}
