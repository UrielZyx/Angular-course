import { Injectable } from '@angular/core';
import { VehiclesService } from './vehicles.service';

@Injectable({
  providedIn: 'root'
})
export class HumanReadableVehiclesService {

  constructor(private vehiclesService: VehiclesService) { }

  getVehiclesData(): string[] {
    return this.vehiclesService.getVehiclesData()
                .map(v => (v.type + " has " + v.wheels + " wheels"))
  }
}
