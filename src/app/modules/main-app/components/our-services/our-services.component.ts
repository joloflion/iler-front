import { Component } from '@angular/core';
import { Title } from 'src/app/shared/models/title';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  projetTitle: Title = {
    name: "Services",
    desc: "Découvrer nos servies",
    type: "",
    link: ""
  }

  public services: any [] = [
    {
      id: '1',
      title: 'Financement projet',
      desc: 'Nous proposons des services de financement participatif pour aider les agriculteurs à concrétiser leurs projets et à développer leur activité agricole.',
      icon: 'fas fa-hand-holding-usd'
    },
    {
      id: '2',
      title: 'Vente de produits',
      desc: 'Nous proposons des services de mise en relation entre les agriculteurs et les sociétés de vente pour leur permettre de commercialiser leurs produits sur des marchés locaux, nationaux et internationaux.',
      icon: 'fas fa-shopping-basket'
    },
    {
      id: '3',
      title: 'Louer du matériels agricoles',
      desc: 'Nous mettons en relation les agriculteurs avec des prestataires de services agricoles pour leur permettre de louer du matériel agricole pour leurs activités à des tarifs préférentiels.',
      icon: 'fas fa-tractor'
    }
  ]


}
