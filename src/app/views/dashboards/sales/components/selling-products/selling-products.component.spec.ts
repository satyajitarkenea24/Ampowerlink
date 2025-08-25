import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingProductsComponent } from './selling-products.component';

describe('SellingProductsComponent', () => {
  let component: SellingProductsComponent;
  let fixture: ComponentFixture<SellingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
