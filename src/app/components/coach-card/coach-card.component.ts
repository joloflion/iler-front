import { Component, Input } from '@angular/core';
import { Coach } from 'src/app/shared/models/coach';

@Component({
  selector: 'app-coach-card',
  templateUrl: './coach-card.component.html',
  styleUrls: ['./coach-card.component.scss']
})
export class CoachCardComponent {
 @Input() coach!: Coach
}
