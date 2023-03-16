import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent {

  categories = [
    {
      name: "Alimentaires"
    },
    {
      name: "Semences"
    },
    {
      name: "Engrais / Fertilisants"
    },
    {
      name: "Pesticides"
    },
    {
      name: "Matériels"
    }
  ]


}
