import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjetCompagne } from 'src/app/shared/models/projet-campagne';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-caroursel',
  templateUrl: './post-caroursel.component.html',
  styleUrls: ['./post-caroursel.component.scss']
})
export class PostCarourselComponent implements OnInit{

  constructor (private postService: PostService, private loaderService: LoaderService){

  }

  public posts: ProjetCompagne[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
      992:{
        items: 4
      },
     1200: {
         items: 6
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this.loaderService.show()
    this.postService.getPosts().subscribe(res =>{
      console.log(res.docs)
      res.docs.forEach((d: any) =>{
        let data = d.data();
        data.id = d.id;
        this.posts.push(data);
        this.loaderService.hide()
      })
    })
  }





}
