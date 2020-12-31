import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ex7q3Service } from '../ex7q3.service';

@Component({
  selector: 'app-ex7q3',
  templateUrl: './ex7q3.component.html',
  styleUrls: ['./ex7q3.component.css']
})
export class Ex7q3Component implements OnInit {

  user: any = {}
  
  sub: Subscription = new Subscription

  constructor(private service: Ex7q3Service) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  getUser(id: number): void {
    this.sub = this.service
      .getUser(id)
      .subscribe(u => this.user = u)
  }

  updateUser(): void {
    this.service.updateUser(this.user)
  }
}
