import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConactUsFormComponent } from './contact-us-form.component';

describe('ConactUsFormComponent', () => {
  let component: ConactUsFormComponent;
  let fixture: ComponentFixture<ConactUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConactUsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
