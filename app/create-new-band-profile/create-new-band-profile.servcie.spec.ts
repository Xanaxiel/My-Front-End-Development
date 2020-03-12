import { TestBed } from '@angular/core/testing';

import { CreateNewBandProfileService } from './create-new-band-profile.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import {HttpClientModule} from '@angular/common/http';

describe('CreateNewBandProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
  }));

  it('should be created', () => {
    const service: CreateNewBandProfileService = TestBed.get(CreateNewBandProfileService);
    expect(service).toBeTruthy();
  });
});
