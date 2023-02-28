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
    },
    {
      id: '4',
      title: 'Suivi et conseil personnalisé',
      desc: "Nous proposons un suivi personnalisé et un conseil sur mesure pour aider les agriculteurs à surmonter les difficultés qu'ils peuvent rencontrer dans leur activité et à améliorer leur performance.",
      icon: 'fas fa-comments-dollar'
      },
    {
      id: '5',
      title: 'Mise en relation avec des partenaires',
      desc: 'Nous mettons les agriculteurs en relation avec des partenaires pour leur permettre de trouver des débouchés pour leur production, des solutions de stockage, des fournisseurs de matières premières et des experts-conseils.',
      icon: 'fas fa-handshake'
      },
      {
        id: '6',
        title: 'Formations et ateliers',
        desc: 'Nous organisons des formations et des ateliers pour aider les agriculteurs à se former aux nouvelles pratiques agricoles, aux technologies de pointe, à la gestion de leur exploitation et à la commercialisation de leurs produits.',
        icon: 'fas fa-chalkboard-teacher'
        },


  ]


}
