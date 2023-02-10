import { CartService } from './../../shared/services/cart.service';
import { filter, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

   public product!: Product;
   constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public cartService: CartService){

  }

  ngOnInit(): void {
 this.route.params.subscribe(p => {
  this.productService.getById(p['id']).subscribe(r =>{
    var d: any = r.data();
    d.id = r.id;
    this.product = d;
  })

 })}

 addViewCart(p: Product, isExist: boolean){
  console.log(isExist)
  if(!isExist){
    var cart: Cart = {
      product: p,
      quantity: 1
    }
    this.cartService.add(cart)
  }else{
    console.log('clicked')
    this.router.navigate(['/cart'])
  }

 }
}
