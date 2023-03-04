import { Component } from '@angular/core';

@Component({
  selector: 'app-paiement-options',
  templateUrl: './paiement-options.component.html',
  styleUrls: ['./paiement-options.component.scss']
})
export class PaiementOptionsComponent {

  selctedPaiementOption = null;
  paiementOptions = [
    {
      image: "assets/images/om.png",
      name: "Orange Money",
      phone: "77 744 36 63"
    },
    {
      image: "assets/images/wave.png",
      name: "Wave",
      phone: "77 744 36 63"
    }
  ]

  constructor(){}


  onSelect(op: any){
   this.selctedPaiementOption = op;
  }

}
