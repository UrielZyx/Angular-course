import { TestBed } from '@angular/core/testing';

import { Ex6q3Service } from './ex6q3.service';

describe('Ex6q3Service', () => {
  let service: Ex6q3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex6q3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
