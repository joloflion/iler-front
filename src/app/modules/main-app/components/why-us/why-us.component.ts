import { Component } from '@angular/core';
import { Title } from 'src/app/shared/models/title';

@Component({
  selector: 'why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  title: Title = {
    name: "Offres",
    desc: "Pour quoi vous devez utiliser notre platforme",
    type: "",
    link: ""
  }

   public services = [
    {
      title: "Soutien financier",
      desc:  "Les contributeurs peuvent soutenir les projets agricoles en effectuant des contributions financières via la plateforme.",
      opened: false
    },
    {
      title: "Coaching agricole",
      desc:  "Les projets soutenus à plus de 60 % seront accompagnés grâce à du coaching aux techniques agricoles pour aider les porteurs de projets à réussir.",
      opened: false
    },
    {
      title: "Écoulement des produits",
      desc:  "La plateforme peut aider les porteurs de projets à écouler leurs produits en les mettant en relation avec des acheteurs potentiels.",
      opened: false
    },
    {
      title: "Transparence",
      desc:  "Les smart contracts permettent une transparence accrue pour les projets soutenus, en permettant aux contributeurs de suivre l'utilisation des fonds de manière automatisée et décentralisée.",
      opened: false
    },
    {
      title: "Automatisation",
      desc: "Les smart contracts permettent d'automatiser les transactions et les distributions de fonds, ce qui facilite la gestion des contributions et des récompenses pour les projets soutenus.",
      opened: false
    },
    {
      title: "Sécurité",
      desc:  "La plateforme utilise des smart contracts et des protocoles de sécurité pour protéger les informations personnelles des utilisateurs et des contributeurs.",
      opened: false
    },
    {
      title: "Conformité",
      desc:  "La plateforme garantit que les projets proposés respectent les lois et les réglementations en vigueur dans chaque pays.",
      opened: false
    },
    {
      title: "Support et suivi",
      desc:  "La plateforme fournit un système de suivi pour les projets soutenus, afin que les contributeurs puissent suivre l'avancée des projets et voir les résultats obtenus grâce à leur soutien.",
      opened: false
    },
    {
      title: "Récompenses pour les contributeurs",
      desc:  "La plateforme propose des récompenses pour les contributeurs en fonction de leur niveau de soutien, cela peut varier de produits agricoles à des visites de fermes ou des ateliers de formation agricole.",
      opened: false
    }
   ];

   open(service:any){
    this.services.map(s => {
      if(s === service) {
        s.opened = !s.opened;
      } else{
        s.opened = false;
      }

    });

   }
}
