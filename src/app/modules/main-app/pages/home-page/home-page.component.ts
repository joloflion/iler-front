import { Component } from '@angular/core';
import { Title } from 'src/app/shared/models/title';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  projetTitle: Title = {
    name: "Projets",
    desc: "Soutenir les meilleurs projets",
    type: "",
    link: ""
  }


}
