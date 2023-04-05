import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-price',
  templateUrl: './search-price.component.html',
  styleUrls: ['./search-price.component.scss']
})
export class SearchPriceComponent {
  @Output()  addressEvent: EventEmitter<any> = new EventEmitter<any>();
  public keyword = 'nom';
  public opened: boolean = false;
  public data = [
    {
      "nom": "Vallée du fleuve Sénégal",
      "latitude": 16.0537,
      "longitude": -16.4778
    },
    {
      "nom": "Bassin arachidier",
      "latitude": 14.7849,
      "longitude": -16.9790
    },
    {
      "nom": "Zone des Niayes",
      "latitude": 14.7719,
      "longitude": -17.0637
    },
    {
      "nom": "Plateau du Cap-Vert",
      "latitude": 14.7448,
      "longitude": -17.4774
    },
    {
      "nom": "Casamance",
      "latitude": 12.3343,
      "longitude": -16.2385
    },
    {
      "nom": "Ferlo",
      "latitude": 15.2170,
      "longitude": -14.1872
    },
    {
      "nom": "Delta du fleuve Sénégal",
      "latitude": 16.3192,
      "longitude": -15.5956
    },
    {
      "nom": "Sine-Saloum",
      "latitude": 14.4062,
      "longitude": -16.9266
    },
    {
      "nom": "Basse-Casamance",
      "latitude": 12.6128,
      "longitude": -16.4341
    },
    {
      "nom": "Haute-Casamance",
      "latitude": 12.7058,
      "longitude": -15.8859
    },
    {
      "nom": "Kaolack",
      "latitude": 14.1501,
      "longitude": -16.0649
    },
    {
      "nom": "Tambacounda",
      "latitude": 13.7843,
      "longitude": -13.6727
    },
    {
      "nom": "Kolda",
      "latitude": 12.8983,
      "longitude": -14.9498
    },
    {
      "nom": "Matam",
      "latitude": 15.6567,
      "longitude": -13.2648
    },
    {
      "nom": "Ziguinchor",
      "latitude": 12.5577,
      "longitude": -16.2452
    },
    {
      "nom": "Louga",
      "latitude": 15.6104,
      "longitude": -16.2313
    },
    {
      "nom": "Thiès",
      "latitude": 14.7900,
      "longitude": -16.9252
    },
    {
      "nom": "Diourbel",
      "latitude": 14.6589,
      "longitude": -16.2333
    },
    {
      "nom": "Dakar",
      "latitude": 14.7167,
      "longitude": -17.4675
    },
    {
      "nom": "Saint-Louis",
      "latitude": 16.0179,
      "longitude": -16.4896
    }
  ]

  public regions = [  {    "id": "1",    "name": "Dakar"  },  {    "id": "2",    "name": "Diourbel"  },  {    "id": "3",    "name": "Fatick"  },  {    "id": "4",    "name": "Kaffrine"  },  {    "id": "5",    "name": "Kaolack"  },  {    "id": "6",    "name": "Kédougou"  },  {    "id": "7",    "name": "Kolda"  },  {    "id": "8",    "name": "Louga"  },  {    "id": "9",    "name": "Matam"  },  {    "id": "10",    "name": "Saint-Louis"  },  {    "id": "11",    "name": "Sédhiou"  },  {    "id": "12",    "name": "Tambacounda"  },  {    "id": "13",    "name": "Thiès"  },  {    "id": "14",    "name": "Ziguinchor"  }]




  selectEvent(item: any) {
    this.addressEvent.emit(item);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any){
    // do something when input is focused
  }
}
