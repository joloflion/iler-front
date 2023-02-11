import { Category } from './../../shared/models/category';
import { ProductService } from './../../shared/services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  public categories: Category[] = [];

   constructor(private productService: ProductService){
     productService.getCategories().subscribe(r =>{
      r.docs.map(v => {
        var d: any = v.data()
        d.id = v.id;
        this.categories.push(d)
      })
     })
   }
}
