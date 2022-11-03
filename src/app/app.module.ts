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
    HeadComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
