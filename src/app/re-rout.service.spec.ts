import { TestBed } from '@angular/core/testing';

import { ReRoutService } from './re-rout.service';

describe('ReRoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReRoutService = TestBed.get(ReRoutService);
    expect(service).toBeTruthy();
  });
});
