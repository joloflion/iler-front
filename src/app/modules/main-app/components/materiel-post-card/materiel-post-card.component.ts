import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MaterielPost } from 'src/app/shared/models/materiel-post';

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
