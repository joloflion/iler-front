import { Product } from './../../shared/models/product';
import { CartService } from './../../shared/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-quantite-button',
  templateUrl: './quantite-button.component.html',
  styleUrls: ['./quantite-button.component.scss']
})
export class QuantiteButtonComponent implements OnInit {

  @Input() product!: Product;
   public cart!: Cart;

  constructor(public cartService: CartService){

  }

  ngOnInit(): void {
    this.cart = this.cartService.findCartByProduct(this.product);
  }



}
