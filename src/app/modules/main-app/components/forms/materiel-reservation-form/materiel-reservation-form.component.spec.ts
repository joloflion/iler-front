import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielReservationFormComponent } from './materiel-reservation-form.component';

describe('MaterielReservationFormComponent', () => {
  let component: MaterielReservationFormComponent;
  let fixture: ComponentFixture<MaterielReservationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielReservationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
