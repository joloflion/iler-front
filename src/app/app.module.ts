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
    AddPostPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    NgCircleProgressModule.forRoot(),
    AngularMaterialModule,
    ReactiveFormsModule,
    CdTimerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
