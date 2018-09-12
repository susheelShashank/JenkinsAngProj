import { TestBed, inject } from '@angular/core/testing';

import { BhalsarService } from './bhalsar.service';

describe('BhalsarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BhalsarService]
    });
  });

  it('should be created', inject([BhalsarService], (service: BhalsarService) => {
    expect(service).toBeTruthy();
  }));
});
