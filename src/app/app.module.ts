import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { UserListItemComponent } from './pages/user-list/user-list-item/user-list-item.component';
import { UserListFormComponent } from './pages/user-list/user-list-form/user-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    UserListItemComponent,
    UserListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
