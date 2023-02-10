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

public  increase(p: Product){
  this.cart$.subscribe(r => {
   r.find(v => p.id === v.product.id)!.quantity ++
  })
  }

  decrease(p: Product){
    this.cart$.subscribe(r => {
     var result = r.find(v => p.id === v.product.id);
      result!.quantity > 1 ? result!.quantity -- : 1;
     })
  }

  getTotal(){
    var total: number = 0;
    this.cart$.subscribe(r => r.map(v => total += v.product.price*v.quantity));
    return total;
  }

  public totalByProd(p: Product): any{
    var price;
    this.cart$.subscribe(r => {
     var result = r.find(v => v.product.id === p.id);
     price = ''+result!.quantity*result!.product.price;
    });
    return price;
  }

  remove(cart: Cart){
    this.cart$.subscribe((cartList: any) => {
      if(cartList.includes(cart)){
        var newP = cartList.filter((obj:Cart) => {return obj !== cart});
        this.saveCartLocal(newP);
        this.cart$.next(newP);
      }
    })
  }

  findCartByProduct(p: Product): any{
   var cart: any

   this.cart$.subscribe(c => {
   cart = c.find(v => v.product.id === p.id);
  })
   return cart;
  }

  isFound(p: Product): boolean{
    var status = false;
    this.cart$.subscribe(v => {
     if(v.find(c => c.product.id === p.id) !== undefined) {
       status = true;
     }})
    return status;
  }

  saveCartLocal(cart: Cart[]){
    localStorage.setItem(CART, JSON.stringify(cart))
  }



  loadCartLocal(): Cart[]{
    return localStorage.getItem(CART) != null ? JSON.parse(localStorage.getItem(CART)!) : [];
  }
}
