import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Title } from 'src/app/shared/models/title';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ScrollTopService } from 'src/app/shared/services/scrolltop.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

   public product!: Product;
   public products: Product[] = [];
   public prodTitle:Title = {
    name: "PRODUITS",
    desc: "Produits similaires",
    type: "",
    link: ""
   }
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
