import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPriceComponent } from './market-price.component';
import { HomePriceComponent } from './pages/home-price/home-price.component';

const routes: Routes = [
  {
    path: '',
    component: MarketPriceComponent,
    children: [
      {
        path: '',
        component: HomePriceComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketPriceRoutingModule { }
