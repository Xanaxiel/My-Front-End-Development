import { TestBed } from '@angular/core/testing';

import { ResetPasswordService } from './reset-password.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import {HttpClientModule} from '@angular/common/http';

describe('ResetPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
  }));

  it('should be reset', () => {
    const service: ResetPasswordService = TestBed.get(ResetPasswordService);
    expect(service).toBeTruthy();
  });
});
