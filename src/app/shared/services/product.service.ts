import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable } from 'rxjs';

const PRODUCT_REF = 'products';
const CATEGORY_REF = 'categories';


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private afs: AngularFirestore) { }


  getProducts(): Observable<Product[]> {
    return this.afs.collection(PRODUCT_REF).get().pipe(
      map(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          const item = doc.data() as Product;
          item.id = doc.id;
          return item;
        });
      })
    );
   }

   getProductsChange(){
   return this.afs.collection<Product>(PRODUCT_REF).snapshotChanges().pipe(
      map(changes => {
        return changes.map(change => {
          const item = change.payload.doc.data() as Product;
          item.id = change.payload.doc.id;
          return item;
        });
      })
    );
   }

    getById(id: string) {
     return this.afs.collection(PRODUCT_REF).doc(id).get();

   }

   findByCategory(categoryId: string){
    return this.afs.collection(PRODUCT_REF)
    .ref.where('typeProduct', '==', categoryId)
    .limit(10)
    .get()

   }

   getCategories(){
    return this.afs.collection(CATEGORY_REF).get()
   }

   save(data: Product){
    return this.afs.collection(PRODUCT_REF).add(data);

   }

   delete(prod: Product){
    return this.afs.collection(PRODUCT_REF).doc(prod.id).delete();
   }
}
