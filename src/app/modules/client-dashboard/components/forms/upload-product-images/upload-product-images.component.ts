import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadImageService } from 'src/app/shared/services/upload-image.service';

@Component({
  selector: 'app-upload-product-images',
  templateUrl: './upload-product-images.component.html',
  styleUrls: ['./upload-product-images.component.scss']
})
export class UploadProductImagesComponent  implements OnInit{


  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  urls: string[] = [];
  previewUrls: string [] = [];
  fileInfos?: Observable<any>;
  loading: boolean = false;

  @Output() uploadEmit = new EventEmitter<string[]>();



  constructor(private uploadService: UploadImageService) { }


  ngOnInit(){
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.uploadFiles();
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.uploadFirestore(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        });
    }
  }

  uploadFirestore(idx: number, file: File): void{
    this.loading = true;
    const reader = new FileReader();
     if(file){
      reader.readAsDataURL(file);
      reader.onload = () =>{
        let src = reader.result as string;
        this.previewUrls.push(src)
      }
    this.uploadService.uploadToFirestore(file, `products/${file.name}`)
      .subscribe(snp => {
      console.log(snp?.state)
      if(snp?.state === 'success'){
        snp?.ref.getDownloadURL()
        .then(url => {
          this.urls.push(url);
          this.uploadEmit.emit(this.urls);
          this.loading = false;

          return url;

        })
        .catch((error) => this.loading = false)
      }


      }, err => this.loading = false)

     }
  }
}
