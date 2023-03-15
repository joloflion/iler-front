import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/shared/services/scrolltop.service';
import { MaterielPost } from 'src/app/shared/models/materiel-post';
import { Materiel } from 'src/app/shared/models/materiel';
import { MaterielService } from 'src/app/shared/services/materiel.service';

@Component({
  selector: 'app-materiel-post-details',
  templateUrl: './materiel-post-details.component.html',
  styleUrls: ['./materiel-post-details.component.scss']
})
export class MaterielPostDetailsComponent  implements OnInit{


  post!: Materiel ;


  constructor(
    private route: ActivatedRoute,
    private scrollTopService: ScrollTopService,
    private materielService: MaterielService){
    route.params.subscribe(v =>{
    this.materielService.findById(v['id'])
    .subscribe(res =>{
      this.post = res.data() as Materiel;
      this.post.id = res.id;
    })

    })
  }

  ngOnInit(): void {
    this.scrollTopService.setScrollTop();
  }

}
