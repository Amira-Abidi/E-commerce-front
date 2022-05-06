import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { SingleProductsComponent } from './shop/single-products/single-products.component';
import { CartComponent } from './shop/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddToCartComponent } from './shop/modal-add-to-cart/modal-add-to-cart.component';
import { ModalQuickViewComponent } from './shop/modal-quick-view/modal-quick-view.component';
import { CategoryComponent } from './category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { AuthGuard } from './services/auth.guard';
import { ButtonPaypalComponent } from './shop/button-paypal/button-paypal.component';

export const routes: Routes = [
 //objet key value (path key, componennet value)
  {path:'home', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'cart', component: CartComponent},
  {path:'single-product/:id', component: SingleProductsComponent},
  {path:'category/:id', component: CategoryComponent},
  {path:'contact', component: ContactComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'checkout', canActivate: [AuthGuard], component: CheckoutComponent},
  {path:'notFound', component: NotFoundComponent},
  {path:'', component: ShopComponent},
  {path:'**', redirectTo: 'notFound', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    SingleProductsComponent,
    CartComponent,
    ModalAddToCartComponent,
    ModalQuickViewComponent,
    CategoryComponent,
    CheckoutComponent,
    ButtonPaypalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
