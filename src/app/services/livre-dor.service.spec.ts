import { TestBed } from '@angular/core/testing';

import { LivreDorService } from './livre-dor.service';

describe('LivreDorService', () => {
  let service: LivreDorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreDorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
