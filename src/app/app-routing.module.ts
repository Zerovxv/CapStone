import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

import { UserListComponent } from './User/user-list/user-list.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';

import { VendorListComponent } from './Vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './Vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './Vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './Vendor/vendor-edit/vendor-edit.component';



const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},

  {path: "user/list",component: UserListComponent},
  {path: "user/create",component: UserCreateComponent},
  {path: "user/detail/:id",component: UserDetailComponent},
  {path: "user/edit/:id",component: UserEditComponent},

  {path: "vendor/list",component: VendorListComponent},
  {path: "vendor/create",component: VendorCreateComponent},
  {path: "vendor/detail/:id",component: VendorDetailComponent},
  {path: "vendor/edit/:id",component: VendorEditComponent},

  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent},

  {path: "**",component: E404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
