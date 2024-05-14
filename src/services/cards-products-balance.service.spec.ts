import { TestBed } from '@angular/core/testing';

import { CardsProductsBalanceService } from './cards-products-balance.service';

describe('CardsProductsBalanceService', () => {
  let service: CardsProductsBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsProductsBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
