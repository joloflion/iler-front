import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItem2Component } from './header-item2.component';

describe('HeaderItem2Component', () => {
  let component: HeaderItem2Component;
  let fixture: ComponentFixture<HeaderItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderItem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
