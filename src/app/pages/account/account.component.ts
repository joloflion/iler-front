import { ProjetCompagne } from 'src/app/shared/models/projet-campagne';
import { PostService } from './../../shared/services/post.service';
import { AuthService } from './../../shared/services/auth.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user$ = this.authService.userData;
posts: ProjetCompagne[] = [];
  constructor(public authService: AuthService, public postService: PostService) {

  }

  ngOnInit(): void {
    this.authService.afAuth.authState.subscribe(user =>{
      this.getPosts(user?.uid!)
    })
  }


  getPosts(id: string): void{
    this.postService.getByUserId(id);
  }
}
