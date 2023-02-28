import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

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
