import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  show: any = {}

  subs: Subscription[] = []

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subs[0] = this.route.params.subscribe(params => {
      this.subs[1] = this.http.get<any[]>("http://api.tvmaze.com/shows/" + params["id"])
        .subscribe(data => {
          this.show = data
          console.log(this.show.image.medium)
        })
    })
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe())
  }

}
