import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ScrollTopService } from 'src/app/shared/services/scrolltop.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent {

  public product!: Product;
  public products: Product[] = [];

  constructor(
   private productService: ProductService,
   private route: ActivatedRoute,
   private router: Router,
   private scrollTopService: ScrollTopService,
   public cartService: CartService){

 }

 ngOnInit(): void {
   this.scrollTopService.setScrollTop();
this.route.params.subscribe(p => {
 this.productService.getById(p['id']).subscribe(r =>{
   var d: any = r.data();
   d.id = r.id;
   this.product = d;
   this.productService.findByCategory(this.product.typeProduct)
   .then(r =>  {
     r.docs.map(d => {
       var sp: any =d.data()
       sp.id = d.id;
       this.products.push(sp)
     })
   })
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
