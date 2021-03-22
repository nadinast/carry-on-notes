import { TestBed } from '@angular/core/testing';

import { NotLoggedInGuardService } from './not-logged-in-guard.service';

describe('LoggedInGuardService', () => {
  let service: NotLoggedInGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotLoggedInGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
