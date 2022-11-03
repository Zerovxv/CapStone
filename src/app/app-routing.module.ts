import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

import { UserListComponent } from './User/user-list/user-list.component';
import { UserDetailComponent } from './User/user-detail/user-detail.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},

  {path: "use/list",component: UserListComponent},
  {path: "use/create",component: UserCreateComponent},
  {path: "use/detail/:id",component: UserDetailComponent},
  {path: "use/edit/:id",component: UserEditComponent},

  {path: "home",component: HomeComponent},
  {path: "about",component: AboutComponent},

  {path: "**",component: E404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
