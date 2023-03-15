import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-quantity-btn',
  templateUrl: './quantity-btn.component.html',
  styleUrls: ['./quantity-btn.component.scss']
})
export class QuantityBtnComponent implements OnInit  {


  @Input() cart!: Observable<Cart> | null;
  constructor(private cartService: CartService){
     console.log(this.cart)
  }



  increase(c: Observable<Cart> | null){

    if(c != undefined){
      c.subscribe(r => this.cartService.increase(r!))

    }

  }

  decrease(c: Observable<Cart> | null){
   //this.cartService.decrease(c);
  }



  deleteCart(c: Observable<Cart> | null){
  // this.cartService.remove(c);
  }

  ngOnInit(): void {

  }




}
