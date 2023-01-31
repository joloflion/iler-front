import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public services: any [] = [
    {
      id: '1',
      title: 'Collete de fond',
      desc: 'Lancer une campange de pour financer votre projet',
      icon: 'fas fa-hand-holding-usd'
    },
    {
      id: '2',
      title: 'Assistance technique',
      desc: 'Faites-vous accompagner par des Ingenieurs',
      icon: 'fas fa-hands-helping'
    },
    {
      id: '3',
      title: 'Vente de produits',
      desc: 'Utiliser notre plateforme pour vendre vos produits',
      icon: 'fas fa-shopping-basket'
    }

  ]

  constructor(public authService: AuthService){

  }

}
