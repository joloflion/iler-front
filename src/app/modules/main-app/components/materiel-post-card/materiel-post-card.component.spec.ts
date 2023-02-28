import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPostCardComponent } from './materiel-post-card.component';

describe('MaterielPostCardComponent', () => {
  let component: MaterielPostCardComponent;
  let fixture: ComponentFixture<MaterielPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielPostCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
