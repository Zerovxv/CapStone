import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

import { UserListComponent } from './User/user-list/user-list.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';

import { VendorListComponent } from './Vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './Vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './Vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './Vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductCreateComponent } from './Product/product-create/product-create.component';
import { ProductEditComponent } from './Product/product-edit/product-edit.component';

import { RequestListComponent } from './Request/request-list/request-list.component';
import { RequestDetailComponent } from './Request/request-detail/request-detail.component';
import { RequestCreateComponent } from './Request/request-create/request-create.component';
import { RequestEditComponent } from './Request/request-edit/request-edit.component';
import { RequestLinesComponent } from './Request/request-lines/request-lines.component';

import { ReviewComponent } from './Request/review-requests/review.component';


import { RequestLineCreateComponent } from './RequestLine/requestline-create/requestline-create.component';
import { RequestLineEditComponent } from './RequestLine/requestline-edit/requestline-edit.component';




const routes: Routes = [
  {path: "", redirectTo: "/user/login", pathMatch: "full"},

  {path: "user/list",component: UserListComponent},
  {path: "user/create",component: UserCreateComponent},
  {path: "user/detail/:id",component: UserDetailComponent},
  {path: "user/edit/:id",component: UserEditComponent},
  {path: "user/login",component: UserLoginComponent},

  {path: "vendor/list",component: VendorListComponent},
  {path: "vendor/create",component: VendorCreateComponent},
  {path: "vendor/detail/:id",component: VendorDetailComponent},
  {path: "vendor/edit/:id",component: VendorEditComponent},

  {path: "product/list",component: ProductListComponent},
  {path: "product/create",component: ProductCreateComponent},
  {path: "product/detail/:id",component: ProductDetailComponent},
  {path: "product/edit/:id",component: ProductEditComponent},

  {path: "request/list",component: RequestListComponent},
  {path: "request/create",component: RequestCreateComponent},
  {path: "request/detail/:id",component: RequestDetailComponent},
  {path: "request/edit/:id",component: RequestEditComponent},
  {path: "request/lines/:id",component: RequestLinesComponent},
  { path: "requests/review", component: ReviewComponent },


  {path: "requestline/create/:id",component: RequestLineCreateComponent},
  {path: "requestline/edit/:id",component: RequestLineEditComponent},

  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent},

  {path: "**",component: E404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
