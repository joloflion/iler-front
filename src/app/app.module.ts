import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { ScrollTopService } from './shared/services/scrolltop.service';
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
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { StarRatingModule } from 'angular-star-rating';
import { ServiceButtonComponent } from './components/service-button/service-button.component';
import { CartComponent } from './components/cart/cart.component';
import { ResultsComponent } from './components/results/results.component';
import { NgAnimatedCounterModule } from '@bugsplat/ng-animated-counter';
import { CoachCardComponent } from './components/coach-card/coach-card.component';
import { CoachListComponent } from './components/coach-list/coach-list.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductBannerComponent } from './components/product-banner/product-banner.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { QuantiteButtonComponent } from './components/quantite-button/quantite-button.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { SmallCartComponent } from './components/small-cart/small-cart.component';
import { RentabiliteComponent } from './components/rentabilite/rentabilite.component';
import { ProjectFormComponent } from './components/forms/project-form/project-form.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { LocationMaterielPageComponent } from './components/location-materiel-page/location-materiel-page.component';
import { CoachDetailPageComponent } from './pages/coach-detail-page/coach-detail-page.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { MaterielPostCardComponent } from './components/materiel-post-card/materiel-post-card.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MaterielPostDetailsComponent } from './pages/materiel-post-details/materiel-post-details.component';
import { MaterielReservationFormComponent } from './components/forms/materiel-reservation-form/materiel-reservation-form.component';
import { RoundedButtonComponent } from './components/butons/rounded-button/rounded-button.component';
import { SquareButtonComponent } from './components/butons/square-button/square-button.component';
import { AddressAutocompleteComponent } from './components/address-autocomplete/address-autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { GoogleMapsModule } from '@angular/google-maps';





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
    WhyUsComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ServiceButtonComponent,
    CartComponent,
    ResultsComponent,
    CoachCardComponent,
    CoachListComponent,
    ProductComponent,
    ProductBannerComponent,
    ProductCategoriesComponent,
    ProductListComponent,
    ProductFilterComponent,
    QuantiteButtonComponent,
    CartDetailsComponent,
    SmallCartComponent,
    RentabiliteComponent,
    ProjectFormComponent,
    ServiceDetailsComponent,
    MaterialCardComponent,
    MaterialListComponent,
    LocationMaterielPageComponent,
    CoachDetailPageComponent,
    OurServicesComponent,
    MaterielPostCardComponent,
    AvatarComponent,
    MaterielPostDetailsComponent,
    MaterielReservationFormComponent,
    RoundedButtonComponent,
    SquareButtonComponent,
    AddressAutocompleteComponent,
    MapViewerComponent
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
    StarRatingModule.forRoot(),
    NgAnimatedCounterModule,
    AutocompleteLibModule,
    GoogleMapsModule



  ],
  providers: [AuthService,
    ScrollTopService,

  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
