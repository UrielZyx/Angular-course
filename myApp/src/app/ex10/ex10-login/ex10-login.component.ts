import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ex10AuthService } from '../ex10-auth.service';
import { Ex10MenuComponent } from '../ex10-menu/ex10-menu.component';

@Component({
  selector: 'app-ex10-login',
  templateUrl: './ex10-login.component.html',
  styleUrls: ['./ex10-login.component.css']
})
export class Ex10LoginComponent implements OnInit {

  userName: string = ""
  password: string = ""

  sub: Subscription = new Subscription()

  constructor(private authUtils: Ex10AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  login(){
    this.sub = this.authUtils.login(this.userName, this.password)
      .subscribe(data => {
        this.authUtils.save(data)
        this.router.navigate(["/menu"])
      })
  }

}
