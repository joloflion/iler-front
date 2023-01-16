import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Post } from 'src/app/shared/models/post';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts$: Post[] = [];

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
    private authService: AuthService
  ) { }


  getPosts() {
   return this.afs.collection('posts').get();
  }

   getById(id: string) {
    return this.afs.collection('posts').doc(id).get();

  }

  getByUserId(id: string){
     this.afs.collection('posts', ref => ref.where('author.uid', '==', id))

                      .valueChanges()
                      .subscribe(d =>{
                        d.map((data: any) => {
                          this.posts$.push(data);
                        })
                      })
  }

  save(post: Post){
    this.afs.collection('posts').add(post)
    .then((res) => {
      this.router.navigate(['account', this.authService.userData.uid])
    })
    .catch((error) =>{
      alert(error)
    })
  }
}
