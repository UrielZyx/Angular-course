import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-main',
  templateUrl: './tv-main.component.html',
  styleUrls: ['./tv-main.component.css']
})
export class TvMainComponent implements OnInit {

  shows: any[] = []

  sub: Subscription = new Subscription()

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.http.get<any[]>("http://api.tvmaze.com/shows")
      .subscribe(data => this.shows = data.slice(0,10))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  selectShow(id: number){
    this.router.navigate(["show/" + id])
  }

}
