import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GoogleMapsModule } from '@angular/google-maps';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ErrorDialogComponent } from './errors/error-dialog/error-dialog.component';
import { LoadingDialogComponent } from './errors/loading/loading-dialog/loading-dialog.component';
import { LoadingDialogService } from './errors/loading/loading.service';
import { ErrorDialogService } from './errors/error-dialog.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatButtonModule } from '@angular/material/button';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToastComponent } from './components/toast/toast.component';
import { MatChipsModule } from '@angular/material/chips';
import { QuantityBtnComponent } from './components/buttons/quantity-btn/quantity-btn.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { StarComponent } from './components/star/star.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { SmallCartComponent } from './components/small-cart/small-cart.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LoadingDialogComponent,
    ToastComponent,
    QuantityBtnComponent,
    StarComponent,
    NavBarComponent,
    CartComponent,
    SmallCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ReactiveFormsModule,
    CarouselModule,
    NgCircleProgressModule.forRoot(),
    GoogleMapsModule,
    AutocompleteLibModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule

  ],
  exports: [
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    ReactiveFormsModule,
    CarouselModule,
    NgCircleProgressModule,
    GoogleMapsModule,
    AutocompleteLibModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ToastComponent,
    MatChipsModule,
    QuantityBtnComponent,
    MatAutocompleteModule,
    MatExpansionModule,
    StarComponent,
    NavBarComponent,
    CartComponent,
    SmallCartComponent


  ],
  providers: [LoadingDialogService, ErrorDialogService]
})
export class SharedModule { }
