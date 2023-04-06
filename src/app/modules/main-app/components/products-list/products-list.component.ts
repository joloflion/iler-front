import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Title } from 'src/app/shared/models/title';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{

  @Input() category!: string;

  productTitle!: Title ;
  products: Product[] = [];

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getProductsByCategorie(this.category).subscribe(p => this.products = p);
    this.productTitle = this.category == 'alimentaire' ? {
      name: "Produits de la saison",
      desc: "Nos meilleurs produits de la saison",
      type: "",
      link: "",
      bg: "#6cbe03"
    }: this.category == 'semence' ? {
      name: "Semences",
      desc: "Nos meilleurs produits de la saison",
      type: "",
      link: "",
      bg: "#FFA500"
    }: {
      name: "Engrais / Fertilisants / Pesticides",
      desc: "Nos meilleurs produits de la saison",
      type: "",
      link: "",
      bg: "#4c4c4c"
    }
  }

}
