import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent {

  public carts: Cart[] = [];

  constructor(public cartService: CartService){
    document.body.scroll({top: 0})

    cartService.cart$.subscribe((c:any) => {
      this.carts = c;
    })
  }

}
