import { TestBed } from '@angular/core/testing';

import { HumanReadableVehiclesService } from './human-readable-vehicles.service';

describe('HumanReadableVehiclesService', () => {
  let service: HumanReadableVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanReadableVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
