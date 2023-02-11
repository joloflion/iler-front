import { Category } from './../models/category';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

const PRODUCT_REF = 'products';
const CATEGORY_REF = 'categories';


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

   findByCategory(categoryId: string){
    return this.afs.collection(PRODUCT_REF)
    .ref.where('categoryId', '==', categoryId)
    .limit(10)
    .get()

   }

   getCategories(){
    return this.afs.collection(CATEGORY_REF).get()
   }
}
