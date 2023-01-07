import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarourselComponent } from './post-caroursel.component';

describe('PostCarourselComponent', () => {
  let component: PostCarourselComponent;
  let fixture: ComponentFixture<PostCarourselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCarourselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCarourselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
