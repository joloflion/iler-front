import { PostService } from './../../shared/services/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { ObservableInput, switchMap } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{
  post!: Post;

  constructor(private route: ActivatedRoute, private postService: PostService){

  }

  ngOnInit(){
     this.route.paramMap.subscribe(p =>{
     this.post = this.postService.getById(p.get('id')!)
     })
  }

  getPercent(target: number, raised: number){
    console.log(raised)
    return (raised/target)*100;
  }

  getProgressWidth(percent: number){
  return percent+'%';
  }
}
