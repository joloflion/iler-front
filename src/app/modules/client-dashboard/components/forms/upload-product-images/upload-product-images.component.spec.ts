import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProductImagesComponent } from './upload-product-images.component';

describe('UploadProductImagesComponent', () => {
  let component: UploadProductImagesComponent;
  let fixture: ComponentFixture<UploadProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProductImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
