import { Component } from '@angular/core';

@Component({
  selector: 'app-list-price',
  templateUrl: './list-price.component.html',
  styleUrls: ['./list-price.component.scss']
})
export class ListPriceComponent {

 public products : {
    product: string,
    price: string;
    updateDate: string;
    location: string;

  }[] = [  {    "product": "Riz",    "price": "800 FCFA/kg",    "updateDate": "2023-04-03",    "location": "Saint-Louis"  },  {    "product": "Millet",    "price": "400 FCFA/kg",    "updateDate": "2023-04-02",    "location": "Tambacounda"  },  {    "product": "Maïs",    "price": "300 FCFA/kg",    "updateDate": "2023-04-04",    "location": "Diourbel"  },  {    "product": "Arachide",    "price": "1000 FCFA/kg",    "updateDate": "2023-04-01",    "location": "Ziguinchor"  },  {    "product": "Mangue",    "price": "500 FCFA/kg",    "updateDate": "2023-04-05",    "location": "Thiès"  },  {    "product": "Banane",    "price": "700 FCFA/kg",    "updateDate": "2023-04-03",    "location": "Kaolack"  },  {    "product": "Tomate",    "price": "600 FCFA/kg",    "updateDate": "2023-04-02",    "location": "Dakar"  },  {    "product": "Oignon",    "price": "400 FCFA/kg",    "updateDate": "2023-04-01",    "location": "Touba"  },  {    "product": "Piment",    "price": "1000 FCFA/kg",    "updateDate": "2023-04-05",    "location": "Louga"  },  {    "product": "Manioc",    "price": "200 FCFA/kg",    "updateDate": "2023-04-04",    "location": "Fatick"  }]


}
