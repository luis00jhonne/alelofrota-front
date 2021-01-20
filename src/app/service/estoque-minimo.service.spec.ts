import { TestBed } from '@angular/core/testing';

import { EstoqueMinimoService } from './estoque-minimo.service';

describe('EstoqueMinimoService', () => {
  let service: EstoqueMinimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueMinimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
