import { Post } from 'src/app/shared/models/post';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PostService } from './../../../shared/services/post.service';
import { FileUploadService } from './../../../shared/services/file-upload.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import DateFormatter from 'src/app/shared/utils/date-formater';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent implements OnInit{
  campagnForm!: FormGroup;
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File;
  isSubmitted: boolean = false;
  url: any;
  post!: Post;


  constructor(private fileUploadService: FileUploadService,
     private fb: FormBuilder,
     public authService: AuthService,
     private router: Router,
     private postService: PostService){

  }

  ngOnInit(): void {
    this.campagnForm = this.fb.group(
    {
      title: ['', [Validators.required]],
      amount: ['', [Validators.max(10000000), Validators.min(250000), Validators.required]],
      description: ['', [Validators.required, Validators.minLength(150), Validators.maxLength(300)]],
      startDate: ['', [Validators.required]],
      endDate: ['', Validators.required],
      image: ['', Validators.required]},{validator: this.dateLessThan('startDate', 'endDate')} )
    this.campagnForm.get('startDate')!.patchValue(this.formatDate(new Date()));

  }

    onChange(event: any) {
      let reader = new FileReader();
      if(event.target.files && event.target.files.length > 0) {
        this.file = event.target.files[0];
        reader.readAsDataURL(this.file);
        reader.onload = () => {
          this.url = reader.result;
          this.campagnForm.get('image')?.setValue(this.url)
        };
      }
    }

    onUpload() {
      this.loading = !this.loading;

      this.fileUploadService.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {

                  // Short link via api response
                  this.shortLink = event.link;

                  this.loading = false; // Flag variable
              }
          }
      );
  }

  public formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }

}

 save(){
  this.isSubmitted = true;
  if(this.authService.isLoggedIn && this.authService.userData != null){
    this.post = this.campagnForm.value;
    this.post.validated = false;
    this.post.rised = 0;
    this.post.target = this.campagnForm.get('amount')?.value;
    this.post.author = this.authService.userData.displayName;
    this.post.author = this.authService.userData;
    this.postService.save(this.post);
  }


 }

}
