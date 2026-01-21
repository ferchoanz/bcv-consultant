import { TestBed } from '@angular/core/testing';

import { BcvService } from './bcv-service';

describe('BcvService', () => {
  let service: BcvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BcvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
