import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ex10-products',
  templateUrl: './ex10-products.component.html',
  styleUrls: ['./ex10-products.component.css']
})
export class Ex10ProductsComponent implements OnInit {

  products: any[] = []

  sub: Subscription = new Subscription

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:8000/api/products")
      .subscribe(data => {
        this.products = data
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
