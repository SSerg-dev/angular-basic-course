import { TestBed } from '@angular/core/testing';

import { LocalCounterService } from './local-counter.service';

describe('LocalCounterService', () => {
  let service: LocalCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
