import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { MasterComponent } from './layouts/master/master.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { AdminComponent } from './components/pages/auth/admin/admin.component';
import { AddProductComponent } from './components/pages/auth/admin/add-product/add-product.component';
import { EditComponent } from './components/pages/auth/admin/edit/edit.component';
import { CartComponent } from './components/retail/cart/cart.component';
import { OrderComponent } from './components/retail/order/order.component';

@NgModule({
  declarations: [
    MasterComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AddProductComponent,
    EditComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
