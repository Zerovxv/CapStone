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
import { UserLoginComponent } from './User/user-login/user-login.component';
import { HeadComponent } from './common/head/head.component';


import { VendorListComponent } from './Vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './Vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './Vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './Vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';
import { ProductCreateComponent } from './Product/product-create/product-create.component';

import { RequestListComponent } from './Request/request-list/request-list.component';
import { RequestDetailComponent } from './Request/request-detail/request-detail.component';
import { RequestEditComponent } from './Request/request-edit/request-edit.component';
import { RequestCreateComponent } from './Request/request-create/request-create.component';
import { RequestLinesComponent } from './Request/request-lines/request-lines.component';

import { BoolDisplayPipe } from './common/bool-display.pipe';
import { UserSearchPipe } from './User/user-search.pipe';

import { RequestLineCreateComponent } from './RequestLine/requestline-create/requestline-create.component';
import { RequestLineEditComponent } from './RequestLine/requestline-edit/requestline-edit.component';
import { ReviewComponent } from './Request/review-requests/review.component';
import { ReviewDetailComponent } from './Request/review-detail/review-detail.component';



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
    UserLoginComponent,
    HeadComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    BoolDisplayPipe,
    UserSearchPipe,
    RequestLineCreateComponent,
    RequestLineEditComponent,
    RequestLinesComponent,
    ReviewComponent,
    ReviewDetailComponent,

  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
