import { ScrollTopService } from './shared/services/scrolltop.service';
import { LoaderInterceptor } from './shared/interceptor/loader.interceptor';
import { AngularMaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { CdTimerModule } from 'angular-cd-timer';
import { NgAnimatedCounterModule } from '@bugsplat/ng-animated-counter';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    StarRatingModule.forRoot(),
    AngularMaterialModule,
    CdTimerModule,
    StarRatingModule.forRoot(),
    NgAnimatedCounterModule,
    MatDialogModule,
    SharedModule

  ],
  providers: [AuthService,
    ScrollTopService,

  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
