import { Component } from '@angular/core';
import { MaterielPost } from 'src/app/shared/models/materiel-post';
import { Title } from 'src/app/shared/models/title';

@Component({
  selector: 'materiel-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent {

  public title: Title =
    {
      name: "Matériéls",
      desc: "Louer du matériéls agricoles",
      type: "",
      link: ""
    };

  public posts: MaterielPost[] = [
    {
      id: "1",
      materiel: {
        titre: "Tracteur John Deere",
        desc: "Tracteur John Deere modèle 6520 en parfait état.",
        image: "https://firebasestorage.googleapis.com/v0/b/iler-3f184.appspot.com/o/materiels%2Ftrackt%201.jpeg?alt=media&token=347595ca-7e36-496f-b9a8-27a88f880c88",
        marque: "John Deere",
        position: {
          lat: 48.859771,
          lng: 2.347596
        },
        puissance: "120 ch",
        disponible: true
      },
      prix: 15000,
      prop: {
        displayName: "Jean Dupont",
        email: "jean.dupont@example.com",
        emailVerified: true,
        group: "Agriculteur",
        photoURL: "https://example.com/images/users/jean.dupont.jpg",
        uid: "abc123"
      }
    },
    {
      id: "2",
      materiel: {
        titre: "Moissonneuse-batteuse Claas",
        desc: "Moissonneuse-batteuse Claas modèle Lexion 760 en bon état.",
        image: "https://firebasestorage.googleapis.com/v0/b/iler-3f184.appspot.com/o/materiels%2Ftrackt%202.jpg?alt=media&token=7df5a24b-10dd-48ba-8893-ea1c1ccade16",
        marque: "Claas",
        position: {
          lat: 47.216038,
          lng: -1.552890
        },
        puissance: "360 ch",
        disponible: false
      },
      prix: 35000,
      prop: {
        displayName: "Marie Martin",
        email: "marie.martin@example.com",
        emailVerified: true,
        group: "Agriculteur",
        photoURL: "https://example.com/images/users/marie.martin.jpg",
        uid: "def456"
      }
    },
    {
      id: "3",
      materiel: {
        titre: "Semoir Amazone",
        desc: "Semoir Amazone modèle EDX 6000-2C en très bon état.",
        image: "https://firebasestorage.googleapis.com/v0/b/iler-3f184.appspot.com/o/materiels%2Ftrack%203.jpg?alt=media&token=d8de9cf4-a562-4d95-8f00-9ebf9b01aefd",
        marque: "Amazone",
        position: {
          lat: 49.611621,
          lng: 6.131935
        },
        puissance: "120 ch",
        disponible: true
      },
      prix: 8000,
      prop: {
        displayName: "Philippe Dubois",
        email: "philippe.dubois@example.com",
        emailVerified: true,
        group: "Agriculteur",
        photoURL: "https://example.com/images/users/philippe.dubois.jpg",
        uid: "ghi789"
      }
    },
    {
      id: "4",
      materiel: {
        titre: "Charrue Kuhn",
        desc: "Charrue Kuhn modèle Vari-Master 153 en bon état.",
        image: "https://firebasestorage.googleapis.com/v0/b/iler-3f184.appspot.com/o/materiels%2Ftrack%204.jpg?alt=media&token=92b65893-3582-4d97-8aa1-7f95cf86ac5b",
        marque: "Kuhn",
        position: {
          lat: 48.568463,
          lng: 7.739454
        },
        puissance: "120 ch",
        disponible: false
      },
      prix: 5000,
      prop: {
        displayName: "Jacques Durand",
        email: "jacques.durand@example.com",
        emailVerified: true,
        group: "Agriculteur",
        photoURL: "https://example.com/images/users/jacques.durand.jpg",
        uid: "jkl012"
      }}
    ]



  }
