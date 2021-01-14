import { TestBed } from '@angular/core/testing';

import { Ex10GuardService } from './ex10-guard.service';

describe('Ex10GuardService', () => {
  let service: Ex10GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex10GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
