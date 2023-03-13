import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientDashboardComponent } from './client-dashboard.component';
import { AddProductFormComponent } from './components/forms/add-product-form/add-product-form.component';
import { UploadProductImagesComponent } from './components/forms/upload-product-images/upload-product-images.component';
import { AccountComponent } from './pages/account/account.component';
import { AddProductDialogComponent } from './components/dialogs/add-product-dialog/add-product-dialog.component';
import { ListProduitComponent } from './components/lists/list-produit/list-produit.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ConformDialogComponent } from './components/dialogs/conform-dialog/conform-dialog.component';

const routes: Route[] = [
  {
    path: '',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component:  AccountComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientDashboardComponent,
    AccountComponent,
    AddProductFormComponent,
    UploadProductImagesComponent,
    AddProductDialogComponent,
    ListProduitComponent,
    AddProductComponent,
    ConformDialogComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ClientDashboardModule { }
