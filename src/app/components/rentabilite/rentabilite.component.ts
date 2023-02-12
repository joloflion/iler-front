import { Component } from '@angular/core';

@Component({
  selector: 'app-rentabilite',
  templateUrl: './rentabilite.component.html',
  styleUrls: ['./rentabilite.component.scss']
})
export class RentabiliteComponent {

  coutProd =[
    {
    name: "Tomate",
    sem:  "25 000",
    sol:  "50 000",
    eng:  "30 000",
    pest: "15 000",
    main: "250 000",
    total: "370 000"
   },
   {
    name: "Ognon",
    sem:  "25 000",
    sol:  "50 000",
    eng:  "30 000",
    pest: "15 000",
    main: "250 000",
    total: "370 000"

   },
   {
    name: "Chou",
    sem:  "25 000",
    sol:  "50 000",
    eng:  "30 000",
    pest: "15 000",
    main: "250 000",
    total: "370 000"

   },
   {
    name: "Pomme de terre",
    sem:  "25 000",
    sol:  "50 000",
    eng:  "30 000",
    pest: "15 000",
    main: "250 000",
    total: "370 000"

   }
]

  coutCom =[
    {
      name: "Tomate",
      trans: "250 000",
      stock: "40 000",
      cond: "30 000",
      total: "350 000"
    },
    {
      name: "Ognon",
      trans: "250 000",
      stock: "40 000",
      cond: "30 000",
      total: "350 000"

    },
    {
      name: "Chou",
      trans: "250 000",
      stock: "40 000",
      cond: "30 000",
      total: "350 000"

    },
    {
      name: "Pomme de terre",
      trans: "250 000",
      stock: "40 000",
      cond: "30 000",
      total: "350 000"

    }
  ]

  coutInd =[
    {
      name: "Tomate",
      admin: "Global",
      emp: "Global",
      ass: "30 000",
      amort: "Global",
      total: "50 000"
    },
    {
      name: "Ognon",
      admin: "Global",
      emp: "Global",
      ass: "30 000",
      amort: "Global",
      total: "50 000"

    },
    {
      name: "Chou",
      admin: "Global",
      emp: "Global",
      ass: "30 000",
      amort: "Global",
      total: "50 000"

    },
    {
      name: "Pomme de terre",
      admin: "Global",
      emp: "Global",
      ass: "30 000",
      amort: "Global",
      total: "50 000"

    }
  ]

  volumProd =[
    {
      name: "Tomate",
      spec: "230 kg",
      sup: "2 ha"
    },
    {
      name: "Ognon",
      spec: "230 kg",
      sup: "2 ha"

    },
    {
      name: "Chou",
      spec: "230 kg",
      sup: "2 ha"

    },
    {
      name: "Pomme de terre",
      spec: "230 kg",
      sup: "2 ha"

    }
  ]

  rentabilite = [
    {
      name: "Tomate",
      nbRecolte: "2",
      estimProd: "500 kg",
      prixKilo: "1 200",
      chiffAff: "600 000"
    },
    {
      name: "Ognon",
      nbRecolte: "1",
      estimProd: "500 kg",
      prixKilo: "1 200",
      chiffAff: "600 000"
    },
    {
      name: "Chou",
      nbRecolte: "2",
      estimProd: "500 kg",
      prixKilo: "1 200",
      chiffAff: "600 000"
    },
    {
      name: "Pomme de terre",
      nbRecolte: "1",
      estimProd: "500 kg",
      prixKilo: "1 200",
      chiffAff: "600 000"
    }
  ]
}
