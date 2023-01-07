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



}
