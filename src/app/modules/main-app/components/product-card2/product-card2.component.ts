import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastService, TOAST_STATE } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-product-card2',
  templateUrl: './product-card2.component.html',
  styleUrls: ['./product-card2.component.scss']
})
export class ProductCard2Component implements OnInit{
  @Input() product!: Product;
  carts: Cart[] = [];
  $cart!: Observable<Cart>;

  constructor(
    public cartService: CartService,
    private router:Router,
    private toast: ToastService){

  }

  ngOnInit(): void {
   this.$cart = this.cartService.isExist(this.product!).pipe(map((v) => v))
  }

  add(prod: Product){
    let cart: Cart = {
      product: prod,
      quantity: 1,
      userId: sessionStorage.getItem('iler-user')??""
    }
    this.cartService.add(cart);
  }

  navigate(id: string){
    this.router.navigate(['product',id])
  }

  dismiss(){
    setTimeout(() => this.toast.dismissToast(), 3000)
  }



}
