//
import { TestBed } from '@angular/core/testing';
import { ResourceInterceptor } from './resource.interceptor';
import { TokenService } from '../services/token.service';

describe('ResourceInterceptor', () => {
  let interceptor: ResourceInterceptor;

  // Creamos un mock simple del TokenService
  const tokenServiceMock = {
    getAccessToken: () => 'test-token'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourceInterceptor,
        { provide: TokenService, useValue: tokenServiceMock }
      ]
    });
    interceptor = TestBed.inject(ResourceInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});