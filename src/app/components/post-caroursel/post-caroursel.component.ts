import { PostService } from './../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Post } from 'src/app/shared/models/post';
import { QueryDocumentSnapshot } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-post-caroursel',
  templateUrl: './post-caroursel.component.html',
  styleUrls: ['./post-caroursel.component.scss']
})
export class PostCarourselComponent implements OnInit{

  constructor (private postService: PostService){

  }

  public posts: Post[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res =>{
      res.docs.forEach((d: any) =>{
        let data = d.data();
        data.id = d.id;
        this.posts.push(data)
      })
    })
  }





}
