import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  getVehiclesData(): any[] {
    return [
      {type:'Truck',wheels:8},
      {type:'Car',wheels:4},
      {type:'Motorcycle',wheels : 2}
    ]
  }
}
