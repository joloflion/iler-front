import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import("./modules/main-app/main-app.module").then(m => m.MainAppModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./modules/client-dashboard/client-dashboard.module").then(m => m.ClientDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
