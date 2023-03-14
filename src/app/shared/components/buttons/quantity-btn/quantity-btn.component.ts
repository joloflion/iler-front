import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-quantity-btn',
  templateUrl: './quantity-btn.component.html',
  styleUrls: ['./quantity-btn.component.scss']
})
export class QuantityBtnComponent implements OnInit  {

  @Input() p!: Product;
  cart!: Cart;
  carts: Cart[] = [];
  constructor(private cartService: CartService){

  }



  increase(p: Product){
    this.cartService.increase(p);
  }

  decrease(p: Product){
   this.cartService.decrease(p);
  }

  getQuantity (p: Product) {
    return this.cartService.findCartByProduct(p)?.quantity;

  }

  deleteCart(){
    this.cart = this.cartService.findCartByProduct(this.p)
    this.cartService.remove(this.cart);
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(c => this.carts = c)

  }




}
