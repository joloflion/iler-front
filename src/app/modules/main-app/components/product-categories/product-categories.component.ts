import { Component } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { ProductService } from 'src/app/shared/services/product.service';

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
