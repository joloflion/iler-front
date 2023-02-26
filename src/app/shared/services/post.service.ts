import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  ProjetCompagne } from 'src/app/shared/models/projet-campagne';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const POST_REF = "pojet-campagne";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts$: ProjetCompagne[] = [];

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
    private authService: AuthService
  ) { }


  getPosts() {
   return this.afs.collection(POST_REF).get();
  }

   getById(id: string) {
    return this.afs.collection(POST_REF).doc(id).get();

  }

  getByUserId(id: string){
     this.afs.collection(POST_REF, ref => ref.where('author.uid', '==', id))

                      .valueChanges()
                      .subscribe(d =>{
                        d.map((data: any) => {
                          this.posts$.push(data);
                        })
                      })
  }

  save(post: ProjetCompagne){
    this.afs.collection(POST_REF).add(post)
    .then((res) => {
      this.router.navigate(['account', this.authService.userData.uid])
    })
    .catch((error) =>{
      alert(error)
    })
  }
}
