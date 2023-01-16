import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {

  constructor(private router: Router){

  }

  @Input() post!: Post

  go(id: string){
  this.router.navigate(['posts/'+id])
  }

 getTime(start: string, end: string): number{

  let date1 =  new Date(start);
   let date2 =  new Date(end);

  return date2.getTime() - date1.getTime();


 }


 colorByDeadline(target: number, collected: number){

  let p = (collected/target)*100;

  if(p <= 30 ){
    return '#FD5D5D'
  }
  if(p <= 60 &&  p>30){
    return '#EC9B3B'
  }
  if(p >= 60){
    return '#379237'
  }

  return '';

 }

}
