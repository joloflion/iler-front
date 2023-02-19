import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPostDetailsComponent } from './materiel-post-details.component';

describe('MaterielPostDetailsComponent', () => {
  let component: MaterielPostDetailsComponent;
  let fixture: ComponentFixture<MaterielPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielPostDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
