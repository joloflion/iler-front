import { ProjetCompagne } from 'src/app/shared/models/projet-campagne';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PostService } from 'src/app/shared/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductFormComponent } from '../../components/forms/add-product-form/add-product-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user$ = this.authService.userData;
posts: ProjetCompagne[] = [];
  constructor(
    public authService: AuthService,
    public postService: PostService,
    private router: Router,
    public matDialog: MatDialog) {

  }

  ngOnInit(): void {


  }


  getPosts(id: string): void{
    this.postService.getByUserId(id);
  }

  openAddProductDialog(){
    this.matDialog.open(AddProductFormComponent, {
      width: '540px',
      height: '90vh'
    })
  }

  navigateToAddProd(){
    this.router.navigate(['dashboard/add'])
  }

}
