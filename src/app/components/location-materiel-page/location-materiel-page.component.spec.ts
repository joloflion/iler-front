import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMaterielPageComponent } from './location-materiel-page.component';

describe('LocationMaterielPageComponent', () => {
  let component: LocationMaterielPageComponent;
  let fixture: ComponentFixture<LocationMaterielPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationMaterielPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationMaterielPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
