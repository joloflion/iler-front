import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationSummaryComponent } from './formation-summary.component';

describe('FormationSummaryComponent', () => {
  let component: FormationSummaryComponent;
  let fixture: ComponentFixture<FormationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
