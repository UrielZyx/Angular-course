import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {

  data: string = ""

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
  }

  updateData() {
    setTimeout(() => {
      
    }, 1000);
    this.data = this.utils.getData()
  }

}
