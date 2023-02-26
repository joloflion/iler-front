import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProjetCompagne } from '../models/projet-campagne';


const PROJET_CAMP_REF = "projet-campagnes"

@Injectable({
  providedIn: 'root'
})
export class LoadFixtureService {

  constructor(private httpClient: HttpClient, private afs: AngularFirestore) { }

  public loadProjetCampagne(){
    this.httpClient.get("assets/data-fixtures/projet-campagne.json").subscribe((data: any) =>{
      data.forEach((d : any)=> {
        this.afs.collection(PROJET_CAMP_REF).add(d)

      })
    })
      }

}
