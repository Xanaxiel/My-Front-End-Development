import { TestBed } from '@angular/core/testing';

import { ForgotPasswordService } from './forgot-password.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import {HttpClientModule} from '@angular/common/http';

describe('ForgotPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
  }));

  it('should be changed', () => {
    const service: ForgotPasswordService = TestBed.get(ForgotPasswordService);
    expect(service).toBeTruthy();
  });
});
