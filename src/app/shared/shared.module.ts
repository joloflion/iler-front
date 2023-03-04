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
import { AngularMaterialModule } from './material.module';
import { LoadingDialogService } from './errors/loading/loading.service';
import { ErrorDialogService } from './errors/error-dialog.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LoadingDialogComponent
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
    MatSnackBarModule
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
    MatSnackBarModule


  ],
  providers: [LoadingDialogService, ErrorDialogService]
})
export class SharedModule { }
