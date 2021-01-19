import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = ""
  password: string = ""
  errorMessage: string = ""

  sub: Subscription = new Subscription()

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  login() {
    this.sub = this.auth.login(this.userName, this.password)
      .subscribe((data) => {
        if(this.auth.authenticate(data)) {
          this.router.navigate(["menu"])
        } else {
          this.errorMessage = "Login failed"
        }
      })
  }

}
