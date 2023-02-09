import { Product } from './../../shared/models/product';
import { CartService } from './../../shared/services/cart.service';
import { Component, Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public opened: boolean = false;
  public carts: Cart[] = [];
  @ViewChild('cartBtn') cartButton!: ElementRef;
  @ViewChild('shopCart') cart!: ElementRef;

  constructor(public cartService: CartService, private renderer: Renderer2){
    cartService.cart$.subscribe((c:any) => {
      this.carts = c;
    })
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.cartButton!.nativeElement && this.cart != undefined && e.target!==this.cart!.nativeElement){
        this.opened=true;
    }
  })
  }

  ngOnInit(): void {

}
}
