import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjetCompagne } from 'src/app/shared/models/projet-campagne';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/shared/services/post.service';
import { PaiementOptionsComponent } from '../../components/paiement-options/paiement-options.component';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{
  post!: ProjetCompagne;
  closed: boolean = false;
  loading: boolean = true;
  paiementOpened: boolean = false;

  constructor(
     private route: ActivatedRoute,
     private dialog: MatDialog,
     private router: Router,
     private postService: PostService){

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

  invest(){


  }
}
