import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';
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
import { TitleComponent } from './components/title/title.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { LoaderComponent } from './components/loader/loader.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ServiceButtonComponent } from './components/service-button/service-button.component';
import { CartComponent } from './components/cart/cart.component';
import { ResultsComponent } from './components/results/results.component';
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
import { AddressAutocompleteComponent } from './components/address-autocomplete/address-autocomplete.component';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { PaiementOptionsComponent } from './components/paiement-options/paiement-options.component';
import { FormationDetailsPageComponent } from './pages/formation-details-page/formation-details-page.component';
import { FormationVideoPlayerComponent } from './components/formation-video-player/formation-video-player.component';
import { FormationSummaryComponent } from './components/formation-summary/formation-summary.component';
import { FormationContentComponent } from './components/formation-content/formation-content.component';
import { CommentFormComponent } from './components/forms/comment-form/comment-form.component';
import { FormationCardComponent } from './components/formation-card/formation-card.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { TruncatePipe } from 'src/app/shared/pipes/transform.pipe';
import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConactUsFormComponent } from './components/forms/contact-us-form/contact-us-form.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';




@NgModule({
  declarations: [
    MainAppComponent,
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
    LoaderComponent,
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
    AddressAutocompleteComponent,
    MapViewerComponent,
    PaiementOptionsComponent,
    FormationDetailsPageComponent,
    FormationVideoPlayerComponent,
    FormationSummaryComponent,
    FormationContentComponent,
    CommentFormComponent,
    FormationCardComponent,
    HeaderItemComponent,
    TruncatePipe,
    ConactUsFormComponent,
    BreadCrumbComponent

  ],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    SharedModule

  ]
})
export class MainAppModule { }
