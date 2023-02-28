import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDetailsPageComponent } from './formation-details-page.component';

describe('FormationDetailsPageComponent', () => {
  let component: FormationDetailsPageComponent;
  let fixture: ComponentFixture<FormationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
