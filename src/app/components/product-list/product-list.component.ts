import { Product } from './../../shared/models/product';
import { ProductService } from './../../shared/services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products: Product[] = [];
constructor(public productService: ProductService){
  this.productService.getProducts().subscribe(p =>{
    p.docs.map(d => {
      var data: any = d.data();
      data.id = d.id;
      this.products.push(data)
    })
    })
}
}
