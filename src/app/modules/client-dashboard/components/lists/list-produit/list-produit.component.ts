import { Component } from '@angular/core';
import { AddProduct } from '../../../models/add-product';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent {


  displayedColumns: string[] = ['Nom du produit', 'Prix', 'Catégorie', ''];
  dataSource: AddProduct[] = [];

}
