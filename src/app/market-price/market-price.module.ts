import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketPriceComponent } from './market-price.component';
import { SearchPriceComponent } from './components/forms/search-price/search-price.component';
import { AddPriceComponent } from './components/forms/add-price/add-price.component';
import { ListPriceComponent } from './components/list-price/list-price.component';
import { HeaderPriceComponent } from './components/header-price/header-price.component';
import { HomePriceComponent } from './pages/home-price/home-price.component';
import { SharedModule } from '../shared/shared.module';
import { MarketPriceRoutingModule } from './market-price-routing.module';



@NgModule({
  declarations: [
    MarketPriceComponent,
    SearchPriceComponent,
    AddPriceComponent,
    ListPriceComponent,
    HeaderPriceComponent,
    HomePriceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarketPriceRoutingModule
  ]
})
export class MarketPriceModule { }
