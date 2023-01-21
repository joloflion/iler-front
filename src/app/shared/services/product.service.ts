import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

const PRODUCT_REF = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private afs: AngularFirestore) { }


  getProducts() {
    return this.afs.collection(PRODUCT_REF).get();
   }

    getById(id: string) {
     return this.afs.collection(PRODUCT_REF).doc(id).get();

   }
}
