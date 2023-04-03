import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      992:{
        items: 1
      },
     1200: {
         items: 1
      }
    },
    nav: false
  }

  carousels = [
    {
      id: "1",
      img: "assets/images/materiel.jpg",
      desc: "Location de matériel agicole",
      action:{
        label: "Poster une annonce",
        link: ""
      }
    },
    {
      id: "2",
      img: "assets/images/header-bac.jpg",
      desc: "L'intelligence agricole",
      action:{
        label: "",
        link: ""
      }
    },
    {
      id: "3",
      img: "assets/images/food.jpg",
      desc: "Acheter et vendre des produits",
      action:{
        label: "Vendre mes produits",
        link: ""
      }
    }
  ];

  categories = [
    {
      name: "Alimentaire",
      link: ""
    },
    {
      name: "Semence",
      link: ""
    },
    {
      name: "Engrais",
      link: ""
    },
    {
      name: "Fertilisant",
      link: ""
    },
    {
      name: "Pesticide",
      link: ""
    },
    {
      name: "Matériel",
      link: ""
    },
    {
      name: "Prix du marché",
      link: "/price"
    }
  ]

  topProducts = [
    {
      img: "assets/images/salade.jpg",
      title: "",
      price: "3200 / kg",
      col: "col-12 col-md-6",
      category: "ALIMENTAIRE"

    },
    {
      img: "assets/images/moisoneuse.jpg",
      title: "",
      price: "1200 / kg",
      col: "col-12 col-md-6",
      category: "ALIMENTAIRE"

    },
    {
      img: "assets/images/fraise.jpg",
      title: "",
      price: "4300 / kg",
      col: "col-12 col-md-6",
      category: "ALIMENTAIRE"
    },
    {
      img: "assets/images/tomate.jpg",
      title: "",
      price: "750 / kg",
      col: "col-12 col-md-6",
      category: "ALIMENTAIRE"

    },
    {
      img: "assets/images/engrais.jpg",
      title: "",
      price: "5000",
      col: "col-12 col-md-6",
      category: "ENGRAIS"
    },
    {
      img: "assets/images/tract.jpg",
      title: "",
      price: "6500 / Jour",
      col: "col-12 col-md-6",
      category: "MATERIEL"

    }
  ]



  constructor(
    public authService: AuthService,
    public router: Router
    ){}


   public navigate(){
      this.router!.navigateByUrl('/sign-up')
    }

}
