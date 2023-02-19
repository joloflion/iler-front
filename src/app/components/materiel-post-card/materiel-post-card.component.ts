import { Router, ActivatedRoute } from '@angular/router';
import { MaterielPost } from './../../shared/models/materiel-post';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'materiel-post-card',
  templateUrl: './materiel-post-card.component.html',
  styleUrls: ['./materiel-post-card.component.scss']
})
export class MaterielPostCardComponent {
  @Input() post!: MaterielPost;

  constructor(private router: Router, private route: ActivatedRoute){}

  navigate(){
      this.router.navigate(['post/materiel', this.post.id])
  }
}
