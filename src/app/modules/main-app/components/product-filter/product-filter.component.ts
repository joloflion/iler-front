import { Component } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { ProductService } from 'src/app/shared/services/product.service';

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
