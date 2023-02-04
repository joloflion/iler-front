import { Product } from './../../shared/models/product';
import { CartService } from './../../shared/services/cart.service';
import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public opened: boolean = false;
  public carts: Cart[] = [];

  constructor(public cartService: CartService){
    cartService.cart$.subscribe((c:any) => {
      this.carts = c;
    })
  }
}
