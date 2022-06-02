import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SignInComponent } from './Components/Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { ProductInputComponent } from './Components/product-input/product-input.component';
import { GetProductComponent } from './Components/get-product/get-product.component';
import { UpdateComponent } from './Components/update/update.component';
import { CartComponent } from './Components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductInputComponent,
    GetProductComponent,
    UpdateComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
