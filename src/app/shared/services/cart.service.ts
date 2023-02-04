import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cart$ = new BehaviorSubject([]);
  constructor() { }

  add(product: Cart){

    this.cart$.subscribe((p:any) => {
      if(!p.includes(product)){
        p.push(product)
        this.cart$.next(p);

      }
    })
  }

  remove(product: Product){
    this.cart$.subscribe((p: any) => {
      if(!p.includes(product)){
        var newP = p.filter((obj:any) => {return obj !== product});

        this.cart$.next(newP);
      }
    })
  }
}
