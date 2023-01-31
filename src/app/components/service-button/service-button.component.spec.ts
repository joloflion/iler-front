import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceButtonComponent } from './service-button.component';

describe('ServiceButtonComponent', () => {
  let component: ServiceButtonComponent;
  let fixture: ComponentFixture<ServiceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
