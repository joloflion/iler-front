import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{


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
