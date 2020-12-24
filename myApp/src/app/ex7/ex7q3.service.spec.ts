import { TestBed } from '@angular/core/testing';

import { Ex7q3Service } from './ex7q3.service';

describe('Ex7q3Service', () => {
  let service: Ex7q3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex7q3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
