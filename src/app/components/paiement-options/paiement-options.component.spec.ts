import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementOptionsComponent } from './paiement-options.component';

describe('PaiementOptionsComponent', () => {
  let component: PaiementOptionsComponent;
  let fixture: ComponentFixture<PaiementOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
