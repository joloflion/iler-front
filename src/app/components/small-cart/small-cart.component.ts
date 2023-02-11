import { Cart } from 'src/app/shared/models/cart';
import { Router } from '@angular/router';
import { CartService } from './../../shared/services/cart.service';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.scss']
})
export class SmallCartComponent {
  public carts: Cart[] = [];
  @Output() closed = new EventEmitter<boolean>();

   constructor(
     public cartService: CartService,
     public router: Router){
      cartService.cart$.subscribe((c:any) => {
        this.carts = c;
      })


   }

   navigate(){
    this.close()
    this.router.navigate(['/cart'])
  }

  close(){
    this.closed.emit(true)
  }

}

