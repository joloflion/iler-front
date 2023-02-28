import { MaterielPostDetailsComponent } from './pages/materiel-post-details/materiel-post-details.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';
import { AccountComponent } from '../client-dashboard/pages/account/account.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { FormationDetailsPageComponent } from './pages/formation-details-page/formation-details-page.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainAppComponent } from './main-app.component';

const routes: Routes = [
  {
     path: '',
     component: MainAppComponent,
     children: [
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
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'service',
        component: ServiceDetailsComponent
      },

      {
        path: 'product/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'cart',
        component: CartDetailsComponent
      },
      {
        path: 'post/materiel/:id',
        component: MaterielPostDetailsComponent
      },
      {
        path: 'formation/post/:id',
        component: FormationDetailsPageComponent
      }
     ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
