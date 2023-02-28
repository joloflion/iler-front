import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Route[] = [
  {
    path: '',
    component: ClientDashboardComponent,
    children: [
      {
        path: '',
        component:  AccountComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientDashboardModule { }
