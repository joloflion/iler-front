import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteButtonComponent } from './quantite-button.component';

describe('QuantiteButtonComponent', () => {
  let component: QuantiteButtonComponent;
  let fixture: ComponentFixture<QuantiteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantiteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
