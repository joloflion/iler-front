import { ActivatedRoute } from '@angular/router';
import { MaterielPost } from './../../shared/models/materiel-post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-materiel-post-details',
  templateUrl: './materiel-post-details.component.html',
  styleUrls: ['./materiel-post-details.component.scss']
})
export class MaterielPostDetailsComponent {

  post: MaterielPost =  {
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
  }


  constructor(private route: ActivatedRoute){
    route.params.subscribe(v =>{
     console.log(v['id'])
    })
  }

}
