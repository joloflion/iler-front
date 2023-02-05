import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/cart';
const CART = "cart";
@Injectable({
  providedIn: 'root'
})
export class CartService {
 cart$ = new BehaviorSubject(this.loadCartLocal());
  constructor() {

  }

  add(cart: Cart){
    this.cart$.subscribe((cartList:any) => {
      if(!cartList.includes(cart)){
        cartList.push(cart)
        this.saveCartLocal(cartList);
        this.cart$.next(cartList);

      }
    })
  }

public  increase(cart: Cart){
  this.cart$.subscribe(r => {
   r.find(v => cart === v)!.quantity ++
  })
  }

  decrease(cart: Cart){
    this.cart$.subscribe(r => {
     var result = r.find(v => cart === v);
      result!.quantity > 1 ? result!.quantity -- : 1;
     })
  }

  getTotal(){
    var total: number = 0;
    this.cart$.subscribe(r => r.map(v => total += v.product.price*v.quantity));
    return total;
  }

  remove(cart: Cart){
    this.cart$.subscribe((cartList: any) => {
      if(cartList.includes(cart)){
        var newP = cartList.filter((obj:Cart) => {return obj !== cart});
        this.cart$.next(newP);
      }
    })
  }

  saveCartLocal(cart: Cart[]){
    localStorage.setItem(CART, JSON.stringify(cart))
  }

  loadCartLocal(): Cart[]{
    return localStorage.getItem(CART) != null ? JSON.parse(localStorage.getItem(CART)!) : [];
  }
}
