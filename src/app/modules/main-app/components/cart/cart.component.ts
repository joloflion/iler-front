import { Component, Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/services/cart.service';
import { SmallCartComponent } from '../small-cart/small-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public opened: boolean = false;
  public outside: boolean = false;
  public carts: Cart[] = [];
  @ViewChild('cartBtn') cartButton!: ElementRef;
  @ViewChild('cartView') cart!: ElementRef<SmallCartComponent>;

  constructor(
    public cartService: CartService){
    cartService.cart$.subscribe((c:any) => {
      this.carts = c;
    })

  }

  ngOnInit(): void {

}

listenClose(value: boolean){
  this.opened  = false;
}


}
