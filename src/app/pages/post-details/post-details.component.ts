import { PostService } from './../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import * as moment from 'moment';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{
  post!: Post;
  closed: boolean = false;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private postService: PostService){

  }

  ngOnInit(){
     this.route.paramMap.subscribe(p =>{
      this.postService.getById(p.get('id')!).subscribe((res: any)=>{
        console.log(res.data())
        this.post = res.data();
        this.loading = false;
      })
     })
  }

  getPercent(target: number, raised: number){
    return (raised/target)*100;
  }

  getProgressWidth(percent: number){
  return percent+'%';
  }

  getEndDate(end: string): number{
    var startDate: moment.Moment = moment();
    var endDate: moment.Moment = moment(end);
    var r = startDate.days() - endDate.days()
    if(r < 0) this.closed = true;
    return r
  }
}
