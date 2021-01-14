import { TestBed } from '@angular/core/testing';

import { Ex10AuthService } from './ex10-auth.service';

describe('Ex10AuthService', () => {
  let service: Ex10AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex10AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
