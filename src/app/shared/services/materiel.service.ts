import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Material } from '../material';
import { Materiel } from '../models/materiel';
import { LoaderService } from './loader.service';
import { ToastService, TOAST_STATE } from './toast.service';

const MATERIEL_RESERVATION = 'materiel_reservation';
const MATERIEL = 'materiels';


@Injectable({
  providedIn: 'root'
})
export class MaterielService {

    constructor(
      private afs: AngularFirestore,
      private toast: ToastService,
      private loader: LoaderService
      ) { }


    saveReservation(data: any, form: FormGroup){
      this.loader.show();
      form.disable();
     this.afs.collection(MATERIEL_RESERVATION).add(data)
     .then(res =>{
      this.toast.showToast(TOAST_STATE.success, "Votre réservation à bien été transmis au propriétaire");
      this.dismiss();
      this.loader.hide();
      form.reset();
      form.enable();
     })
     .catch(error => {
      this.toast.showToast(TOAST_STATE.danger, error);
      this.dismiss();
      this.loader.hide();
      form.enable();
     })
    }

    dismiss(){
      setTimeout(() => this.toast.dismissToast(),6000)
    }

    findAll(){
      return this.afs.collection<Materiel>(MATERIEL).snapshotChanges().pipe(
        map(changes => {
          return changes.map(change => {
            const item = change.payload.doc.data() as Materiel;
            item.id = change.payload.doc.id;
            return item;
          });
        })
      );
    }

    findById(id: string){
      return this.afs.collection(MATERIEL).doc(id).get();
    }
}
