import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from 'src/app/shared/models/coach';

@Component({
  selector: 'app-coach-card',
  templateUrl: './coach-card.component.html',
  styleUrls: ['./coach-card.component.scss']
})
export class CoachCardComponent {

 @Input() coach!: Coach

 constructor(private router: Router, private route: ActivatedRoute){}

 navigate(id: string){

      this.router.navigate(['formation/post/', id])

 }
}
