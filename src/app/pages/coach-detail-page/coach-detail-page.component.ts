import { MaterielPost } from './../../shared/models/materiel-post';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coach-detail-page',
  templateUrl: './coach-detail-page.component.html',
  styleUrls: ['./coach-detail-page.component.scss']
})
export class CoachDetailPageComponent {

   constructor(private route: ActivatedRoute){
     route.params.subscribe(v =>{
      console.log(v['id'])
     })
   }
}
