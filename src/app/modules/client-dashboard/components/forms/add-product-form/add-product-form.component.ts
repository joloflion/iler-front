import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent {

   productForm!: FormGroup;
   sousCategorie!: any;

 public typeProduits = [
    {
     nomCategorie: "Légumes",
     produits:  [

    {
      nomProduit: "Tomate",
      variete: ["Médina", "Tamba", "Naïla", "Daniella", "Carmello"]
  },
  {
    nomProduit: "Aubergine",
    variete: ["Agouti", "Poyo", "Safet", "Grossy", "Négresse hâtive"]
  },
  {
    nomProduit: "Concombre",
    variete: ["Natalia", "Marketmore", "Cucino", "Miniature white", "Sooyow nishiki"]
  },
  {
    nomProduit: "Courgette",
    variete: ["Goldrush", "Verte non coureuse d'Italie", "Noire de Milan", "Ronde de Nice", "Tondo di Piacenza"]
  },
  {
    nomProduit: "Chou",
    variete: ["Cœur de bœuf", "Brocoli", "Chou de Chine", "Chou-fleur", "Chou rave"]
  },
  {
    nomProduit: "Piment",
    variete: ["Habanero", "Scotch bonnet", "Cayenne", "Jalapeño", "Piment doux"]
  },
  {
    nomProduit: "Oignon",
    variete: ["Red creole", "Texas grano", "Sweet spanish", "Valencia", "Yellow granex"]
  },
  {
    nomProduit: "Patate douce",
    variete: ["Beauregard", "Georgia jet", "Centennial", "Evangeline", "O'Henry"]
  },
  {
    nomProduit: "Haricot vert",
    variete: ["Contender", "Provider", "French filet", "Blue lake", "Kentucky wonder"]
  },
  {
    nomProduit: "Poivron",
    variete: ["California wonder", "Yolo wonder", "Gypsy", "Red knight", "Banana pepper"]
  }
   ]},
   {
    nomCategorie: "Céréales",
    produits: [
      {    nomProduit: "Riz",    variete: ["Sahel 108", "NERICA 1", "IR 841", "FKR 19", "NERICA L-19"]
  },
  {
    nomProduit: "Maïs",
    variete: ["DKC 80-14", "Pan 53", "TZL Comp 3", "Suwan 1", "Longe 5"]
  },
  {
    nomProduit: "Mil",
    variete: ["Birim", "Kélékua", "Raham", "Yakouta", "Yacine"]
  },
  {
    nomProduit: "Sorgho",
    variete: ["Tabi", "Garoua", "Kara", "Chimbalou", "Débrou"]
  },
  {
    nomProduit: "Blé",
    variete: ["CIMMYT 44", "Kundan", "HD 2967", "Bulbul 98", "Sonalika"]
  },
  {
    nomProduit: "Arachide",
    variete: ["Fleur 11", "Fleur 31", "Fleur 33", "Fleur 41", "Fleur 42"]
  },
  {
    nomProduit: "Soja",
    variete: ["Dakar", "TGx 1835-10E", "TGx 1904-1F", "TGx 1987-11F", "TGx 1987-14F"]
  },
  {
    nomProduit: "Sésame",
    variete: ["SET 142", "SET 215", "SET 325", "SET 331", "SET 359"]
  },
  {
    nomProduit: "Millet perlé",
    variete: ["Okashana 1", "NERICA 14", "TSF 1", "Billet rouge", "Goundam"]
  },
  {
    nomProduit: "Fonio",
    variete: ["Blanc", "Rouge", "Noir", "Moutouari", "Gourmantché"]
  }
]

   },
   {
    nomCategorie: "Fruits",
    produits: [  {    nomProduit: "Mangue",
    variete: ["Keitt", "Kent", "Tommy Atkins", "Palmer", "José"]
  },
  {
    nomProduit: "Orange",
    variete: ["Navel", "Valencia", "Salustiana", "Lane Late", "Washington Navel"]
  },
  {
    nomProduit: "Citron",
    variete: ["Eureka", "Lisbon", "Meyer", "Ponderosa", "Verna"]
  },
  {
    nomProduit: "Papaye",
    variete: ["Red Lady", "Hawaiian", "Solo Sunrise", "Waimanalo", "Kapoho"]
  },
  {
    nomProduit: "Ananas",
    variete: ["Cayenne lisse", "Queen", "MD2", "Smooth cayenne", "Golden supreme"]
  },
  {
    nomProduit: "Goyave",
    variete: ["Blanche", "Rouge", "Rose", "Jaune", "Poire"]
  },
  {
    nomProduit: "Baobab",
    variete: ["Adansonia digitata", "Adansonia grandidieri", "Adansonia madagascariensis", "Adansonia perrieri", "Adansonia rubrostipa"]
  },
  {
    nomProduit: "Corossol",
    variete: ["Lisa", "Tropicana", "Morada", "Flamboyant", "Mariana"]
  },
  {
    nomProduit: "Avocat",
    variete: ["Hass", "Fuerte", "Pinkerton", "Gwen", "Reed"]
  },
  {
    nomProduit: "Fruit de la passion",
    variete: ["Purple", "Giant Granadilla", "Yellow", "Sweet Granadilla", "Banana Passionfruit"]
  }
]

   }
  ]


   constructor(private fb: FormBuilder,
    private productService: ProductService,
    public loaderService: LoaderService
    ){
    this.productForm = this.fb.group({
      typeProduct:        ['', Validators.required],
      desc:        ['', Validators.required],
      productName: ['', Validators.required],
      variete:     ['', Validators.required],
      price:       ['', Validators.required],
      images:      [''],
      tags:        [''],
      online:      [false, [Validators.required]]
    })
   }


   getImages(event: any){
     this.productForm.get('images')?.setValue(event);
   }

   submit(){
    this.loaderService.show();
    let data = this.productForm.value;
    data.typeProduct = this.productForm.value?.typeProduct?.nomCategorie;
    data.productName = this.productForm.value?.productName?.nomProduit;
    this.productForm.disable();
    this.productService.save(data)
    .then(res => {
      this.loaderService.hide();
      this.productForm.enable();
      this.productForm.reset();
    })
    .catch(error => {
      this.loaderService.hide();
      this.productForm.enable();

    })
   }

}
