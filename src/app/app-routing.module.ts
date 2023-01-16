import { AuthGuard } from './shared/guard/auth.guard';
import { AccountComponent } from './pages/account/account.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
   path: 'sign-up',
   component: SignupComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: AddPostPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
