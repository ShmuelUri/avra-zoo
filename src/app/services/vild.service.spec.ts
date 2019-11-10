import { TestBed } from '@angular/core/testing';

import { VildService } from './vild.service';

describe('VildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VildService = TestBed.get(VildService);
    expect(service).toBeTruthy();
  });
});
