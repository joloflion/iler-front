import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/shared/models/formation';
import { ScrollTopService } from 'src/app/shared/services/scrolltop.service';

@Component({
  selector: 'app-formation-details-page',
  templateUrl: './formation-details-page.component.html',
  styleUrls: ['./formation-details-page.component.scss']
})
export class FormationDetailsPageComponent implements OnInit {


    constructor(private scrollTopService: ScrollTopService){}

   formation: Formation = {
    titre: "Culture de céréales et légumineuses au Sénégal",
    introduction:
      "Le Sénégal est un pays où l'agriculture est très importante pour l'économie et la sécurité alimentaire. Les cultures de céréales et légumineuses sont particulièrement importantes pour les agriculteurs sénégalais, car elles sont à la base de l'alimentation locale et de l'économie. Dans cette formation, nous allons explorer les différentes cultures de céréales et légumineuses au Sénégal, les techniques de culture appropriées et les défis à relever.",
    image: "http://ipar.sn/IMG/jpg/article_ih.jpg",
    chapitres: [
      {
        titre: "Cultures de céréales au Sénégal",
        image: "chemin/vers/image",
        contenu: "Les cultures de céréales sont essentielles pour l'alimentation de base au Sénégal. Les principales cultures de céréales sont le mil, le sorgho, le maïs et le riz. Dans ce chapitre, nous allons explorer les différentes techniques de culture de ces cultures, y compris les semences, les méthodes de labour et de récolte, et les techniques de gestion de la fertilité du sol. Nous aborderons également les défis auxquels sont confrontés les agriculteurs, tels que les maladies et les ravageurs.",
        video: "chemin/vers/video"
      },
      {
        titre: "Cultures de légumineuses au Sénégal",
        image: "chemin/vers/image",
        contenu:
          "Les légumineuses sont également importantes pour l'alimentation et l'économie au Sénégal. Les principales cultures de légumineuses sont le niébé, le haricot et le pois. Dans ce chapitre, nous allons explorer les différentes techniques de culture de ces cultures, y compris les semences, les méthodes de labour et de récolte, et les techniques de gestion de la fertilité du sol. Nous aborderons également les défis auxquels sont confrontés les agriculteurs, tels que les maladies et les ravageurs.",
        video: "chemin/vers/video",
      },
      {
        titre: "Intégration de céréales et légumineuses",
        image: "chemin/vers/image",
        contenu:
          "L'intégration de céréales et de légumineuses est une technique de culture importante pour les agriculteurs sénégalais. En combinant différentes cultures, les agriculteurs peuvent maximiser les rendements, améliorer la qualité du sol et réduire la dépendance aux engrais chimiques. Dans ce chapitre, nous allons explorer les différentes techniques d'intégration de céréales et de légumineuses, ainsi que les avantages pour les agriculteurs.",
        video: "chemin/vers/video",
      },
      {
        titre: "Gestion des maladies et des ravageurs",
        image: "chemin/vers/image",
        contenu:
        "La gestion des maladies et des ravageurs est un défi important pour les agriculteurs sénégalais. Les maladies et les ravageurs peuvent réduire considérablement les rendements et la qualité des cultures. Dans ce chapitre, nous allons explorer les différentes maladies et ravageurs qui affectent les cultures de céréales et de légumineuses au Sénégal, ainsi que les techniques de prévention et de gestion, telles que l'utilisation d'insecticides et de fongicides naturels.",
        video: "chemin/vers/video",
        },
        {
        titre: "Commercialisation des cultures",
        image: "chemin/vers/image",
        contenu:
        "La commercialisation des cultures est un aspect important de l'agriculture au Sénégal. Les agriculteurs doivent être en mesure de vendre leurs cultures à des prix justes pour pouvoir subvenir à leurs besoins et investir dans leur exploitation. Dans ce chapitre, nous allons explorer les différentes stratégies de commercialisation pour les cultures de céréales et de légumineuses au Sénégal, telles que la vente sur les marchés locaux et l'exportation vers d'autres pays.",
        video: "chemin/vers/video",
        },
        ],
        author: "ChatGPT",
        commentaires: [],
        dispo: true,

        };

        ngOnInit(){
        this.scrollTopService.setScrollTop();

        }

}
