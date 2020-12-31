import { TestBed } from '@angular/core/testing';

import { Ex8q2Service } from './ex8q2.service';

describe('Ex8q2Service', () => {
  let service: Ex8q2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex8q2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
