import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { Coach } from 'src/app/shared/models/coach';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent {
  public coaches: Coach[] = [
    {
      id: "1",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 1.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Formation"
    },
    {
      id: "2",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 2.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Accompangement"
    },
    {
      id: "3",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 3.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Assistance"
    },
    {
      id: "4",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 3.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Assistance"
    },
    {
      id: "5",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 3.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Assistance"
    },
    {
      id: "6",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 3.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Assistance"
    },
    {
      id: "7",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 3.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Assistance"
    },
    {
      id: "8",
      user: {
        displayName: "Babacar",
        email: "senghor@gmail.com",
        emailVerified: true,
        photoURL: "",
        uid:"1"
      },
      bannerImage: "assets/images/coach 3.jpg",
      description: "Je suis coach agricole passionné et expérimenté. Avec plus de 8 ans d'expérience dans le secteur, je suis fier de partager mes connaissances et mes compétences pour aider les agriculteurs à atteindre leurs objectifs et à développer leur activité. En tant que membre de la plateforme ILER, je suis là pour offrir un coaching personnalisé et des conseils pertinents pour vous aider à réussir. Je suis impatient de travailler avec vous et de vous aider à atteindre vos aspirations.",
      speciality: "Assistance"
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
      992:{
        items: 4
      },
     1200: {
         items: 4
      }
    },
    nav: false
  }

}
