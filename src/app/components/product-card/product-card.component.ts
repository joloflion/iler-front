import { Subject } from 'rxjs';
import { CartService } from './../../shared/services/cart.service';
import { Product } from './../../shared/models/product';
import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {


  @Input() product!: Product;


  constructor(public cartService: CartService){

  }

  add(prod: Product){
    let cart: Cart = {
      product: prod,
      quantity: 1
    }
    this.cartService.add(cart);
  }
}
