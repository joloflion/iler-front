import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { SearchItem } from '../models/search-item';
const PRODUCT_REF = 'products';
const CATEGORY_REF = 'categories';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private afs: AngularFirestore) { }


  findResult(key: string): Observable<SearchItem[]>{
    return this.afs.collection<any>(PRODUCT_REF, ref => ref.where('productName', '>=', key.toLowerCase()).where('productName', '<=', `${key.toLowerCase()}\uf8ff`)).snapshotChanges().pipe(
      map(changes => {

        return changes.map(change => {
          const result  = change.payload.doc.data() as Product;
         let item: SearchItem = {
          key: "",
          label: result.productName,
          category: result.typeProduct,
          imgLink: result.images[0]
         }
        console.log(item)
          return item;
        });
      })
    );
  }
}
