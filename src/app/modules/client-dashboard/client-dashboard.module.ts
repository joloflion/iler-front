import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { ClientDashboardComponent } from './client-dashboard.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Route[] = [
  {
    path: '',
    component: ClientDashboardComponent,
    canActivate: [AuthGuard],
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
    ClientDashboardComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientDashboardModule { }
