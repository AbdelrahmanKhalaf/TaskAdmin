import { TestBed } from '@angular/core/testing';

import { ProdactsService } from './prodacts.service';

describe('ProdactsService', () => {
  let service: ProdactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
