import { Component, Input } from '@angular/core';
import { Title } from 'src/app/shared/models/title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title!: Title;

}
