import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSideFilterComponent } from './product-side-filter.component';

describe('ProductSideFilterComponent', () => {
  let component: ProductSideFilterComponent;
  let fixture: ComponentFixture<ProductSideFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSideFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
