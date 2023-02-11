import { Category } from './../../shared/models/category';
import { ProductService } from './../../shared/services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent {
    categories: Category[] = [];

    constructor(public productService: ProductService){

       productService.getCategories()
       .subscribe(r => {
        r.docs.map(d => {
          var cat: any = d.data();
          cat.id = d.id;
          this.categories.push(cat)
        })
       })
    }
}
