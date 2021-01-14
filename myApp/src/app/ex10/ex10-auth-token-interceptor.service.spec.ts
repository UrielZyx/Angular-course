import { TestBed } from '@angular/core/testing';

import { Ex10AuthTokenInterceptorService } from './ex10-auth-token-interceptor.service';

describe('Ex10AuthTokenInterceptorService', () => {
  let service: Ex10AuthTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex10AuthTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
