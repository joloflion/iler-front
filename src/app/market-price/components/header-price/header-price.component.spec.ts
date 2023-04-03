import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPriceComponent } from './header-price.component';

describe('HeaderPriceComponent', () => {
  let component: HeaderPriceComponent;
  let fixture: ComponentFixture<HeaderPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
