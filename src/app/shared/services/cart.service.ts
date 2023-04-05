import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import { ToastService, TOAST_STATE } from './toast.service';
import { increment,  } from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable } from 'rxjs';

const CART_REF = "carts";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  $carts: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]) ;
  constructor(
    private afb: AngularFirestore,
    private toast: ToastService
    ) {
    this.getProductsChange()
    .subscribe(res => this.$carts.next(res))
  }

  getProductsChange(): Observable<Cart[]>{
    return this.afb.collection<Cart>(CART_REF).snapshotChanges().pipe(
       map(changes => {
         return changes.map(change => {
           const item = change.payload.doc.data() as Cart;
           item.id = change.payload.doc.id;
           return item;
         });
       })
     );
    }

  add(cart: Cart){
    this.afb.collection(CART_REF).add(cart)
    .then(res => {
      this.toast.showToast(TOAST_STATE.success, "Produit ajouté avec succès !");
      this.dismiss();
    })
    .catch(error => {
      this.toast.showToast(TOAST_STATE.danger, error);
      this.dismiss();
    })

  }

  getTotal(){
   let total = 0;
   return this.$carts.pipe(map((v) => {
     v.map(r => total +=  r.product.price * r.quantity);
     return total;
    }))
  }

public  increase(c: Cart){
  this.afb.collection(CART_REF).doc(c.id).update({'quantity': increment(1)})
  .then(res => {
    this.toast.showToast(TOAST_STATE.success, "Produit ajouté avec succès !");
    this.dismiss();
  })
  .catch(error => {
    this.toast.showToast(TOAST_STATE.danger, error);
    this.dismiss();
  })

  }

  decrease(c: Cart){
    this.afb.collection(CART_REF).doc(c.id).update({'quantity': increment(-1)})
    .then(res => {
      this.toast.showToast(TOAST_STATE.success, "Produit ajouté avec succès !");
      this.dismiss();
    })
    .catch(error => {
      this.toast.showToast(TOAST_STATE.danger, error);
      this.dismiss();
    })
  }

  public getMycart(){

  }

  remove(cart: Cart){
    this.afb.collection(CART_REF).doc(cart.id).delete()
    .then(res => {
      this.toast.showToast(TOAST_STATE.success, "Produit retiré avec succès !");
      this.dismiss();
    })
    .catch(error => {
      this.toast.showToast(TOAST_STATE.danger, error);
      this.dismiss();
    })
  }

  dismiss(){
    setTimeout(() => this.toast.dismissToast(), 3000)
  }

  isExist(p: Product): Observable<any>{
      const whereClause: QueryFn = ref => ref.where('product.id', '==', p.id);
    return this.afb.collection(CART_REF, whereClause).valueChanges().pipe(
      map(values => values[0]),
    );

  }

  findCartByProduct(p: Product): Observable<Cart | undefined> {
  return this.$carts.pipe(map((v) => v.find(r => r.product === p)))
  }






}
