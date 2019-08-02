import { TestBed } from '@angular/core/testing';

import { RescueService } from './rescue.service';

describe('RescueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RescueService = TestBed.get(RescueService);
    expect(service).toBeTruthy();
  });
});
