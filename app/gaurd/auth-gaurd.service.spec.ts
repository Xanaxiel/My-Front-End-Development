import { TestBed } from '@angular/core/testing';

import { AuthGaurdService } from './auth-gaurd.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,
              HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AuthGaurdService = TestBed.get(AuthGaurdService);
    expect(service).toBeTruthy();
  });
});
