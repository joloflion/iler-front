import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

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

  }



}
