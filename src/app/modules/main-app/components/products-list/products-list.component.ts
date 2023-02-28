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

  productTitle: Title = {
    name: "Produits",
    desc: "Nos meilleurs produits de la saison",
    type: "",
    link: ""
  }
  products: Product[] = [];

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(p =>{
    p.docs.map(d => {
      var data: any = d.data();
      data.id = d.id;
      this.products.push(data)
    })
    })

  }

}
