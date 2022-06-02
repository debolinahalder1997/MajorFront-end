import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './Components/about/about.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GetProductComponent } from './Components/get-product/get-product.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductInputComponent } from './Components/product-input/product-input.component';
import { UpdateComponent } from './Components/update/update.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';


const routes: Routes = 
[
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'product-input',component:ProductInputComponent},
  {path:'get-product',component:GetProductComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
