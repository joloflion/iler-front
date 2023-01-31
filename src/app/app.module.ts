import { LoaderInterceptor } from './shared/interceptor/loader.interceptor';
import { AngularMaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninFormComponent } from './components/forms/signin-form/signin-form.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { AddPostFormComponent } from './components/forms/add-post-form/add-post-form.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostCarourselComponent } from './components/post-caroursel/post-caroursel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TitleComponent } from './components/title/title.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CdTimerModule } from 'angular-cd-timer';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { AccountComponent } from './pages/account/account.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import  {TruncatePipe} from './shared/pipes/transform.pipe';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { StarRatingModule } from 'angular-star-rating';
import { ServiceButtonComponent } from './components/service-button/service-button.component';
import { CartComponent } from './components/cart/cart.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostDetailsComponent,
    SigninComponent,
    SignupComponent,
    SigninFormComponent,
    SignupFormComponent,
    AddPostFormComponent,
    PostCardComponent,
    HeaderComponent,
    FooterComponent,
    PostCarourselComponent,
    TitleComponent,
    NavBarComponent,
    AboutUsComponent,
    AddPostPageComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    AccountComponent,
    LoaderComponent,
    TruncatePipe,
    OurServicesComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ServiceButtonComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    NgCircleProgressModule.forRoot(),
    AngularMaterialModule,
    ReactiveFormsModule,
    CdTimerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    StarRatingModule.forRoot()


  ],
  providers: [AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
