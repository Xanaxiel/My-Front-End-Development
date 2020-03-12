import { TestBed } from '@angular/core/testing';

import { DisableUserService } from './disable-user.service';

describe('DisableUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisableUserService = TestBed.get(DisableUserService);
    expect(service).toBeTruthy();
  });
});
