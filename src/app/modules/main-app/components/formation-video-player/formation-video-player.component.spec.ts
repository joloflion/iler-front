import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationVideoPlayerComponent } from './formation-video-player.component';

describe('FormationVideoPlayerComponent', () => {
  let component: FormationVideoPlayerComponent;
  let fixture: ComponentFixture<FormationVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationVideoPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
