import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './misc/menu/menu.component';

import { UserListComponent } from './User/user-list/user-list.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { HeadComponent } from './common/head/head.component';
import { UserLoginComponent } from './use/user-login/user-login.component';
import { VendorListComponent } from './Vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './Vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './Vendor/vendor-edit/vendor-edit.component';
import { VendorChangeComponent } from './Vendor/vendor-change/vendor-change.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';
import { ProductCreateComponent } from './Product/product-create/product-create.component';
import { RequestListComponent } from './Request/request-list/request-list.component';
import { RequestEditComponent } from './Request/request-edit/request-edit.component';
import { RequestDetailComponent } from './Request/request-detail/request-detail.component';
import { RequestCreateComponent } from './Request/request-create/request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    HeadComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorChangeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
