import { TestBed } from '@angular/core/testing';

import { UpdateUserService } from './update-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UpdateUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: UpdateUserService = TestBed.get(UpdateUserService);
    expect(service).toBeTruthy();
  });
});
