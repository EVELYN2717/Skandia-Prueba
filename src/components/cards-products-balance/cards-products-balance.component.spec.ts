import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProductsBalanceComponent } from './cards-products-balance.component';

describe('CardsProductsBalanceComponent', () => {
  let component: CardsProductsBalanceComponent;
  let fixture: ComponentFixture<CardsProductsBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsProductsBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsProductsBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
