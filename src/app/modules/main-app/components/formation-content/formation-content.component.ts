import { Component, Input } from '@angular/core';
import { Formation } from 'src/app/shared/models/formation';

@Component({
  selector: 'app-formation-content',
  templateUrl: './formation-content.component.html',
  styleUrls: ['./formation-content.component.scss']
})
export class FormationContentComponent {
  @Input() formation!: Formation
}
