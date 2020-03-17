import { TestBed } from '@angular/core/testing';

import { ArticalService } from './artical.service';

describe('ArticalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticalService = TestBed.get(ArticalService);
    expect(service).toBeTruthy();
  });
});
