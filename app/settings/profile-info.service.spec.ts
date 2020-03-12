import { TestBed } from '@angular/core/testing';

import { ProfileInfoService } from './profile-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProfileInfoService = TestBed.get(ProfileInfoService);
    expect(service).toBeTruthy();
  });
});
