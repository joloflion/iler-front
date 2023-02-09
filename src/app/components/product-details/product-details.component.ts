import { filter, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

   public product!: Product
   constructor(private productService: ProductService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
 this.route.params.subscribe(p => {
  this.productService.getById(p['id']).subscribe(r =>{
    var d: any = r.data();
    this.product = d;
  })

 })


  }
}
