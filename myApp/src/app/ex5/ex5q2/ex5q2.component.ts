import { Component, OnInit } from '@angular/core';
import { HumanReadableVehiclesService } from '../human-readable-vehicles.service';

@Component({
  selector: 'app-ex5q2',
  templateUrl: './ex5q2.component.html',
  styleUrls: ['./ex5q2.component.css']
})
export class Ex5q2Component implements OnInit {

  data: string[] = []

  constructor(private vehiclesService: HumanReadableVehiclesService) { }

  ngOnInit(): void {
    this.data = this.vehiclesService.getVehiclesData()
  }

}
