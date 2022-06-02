import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "register", component: FormsComponent},
      {path: "login", component: LoginComponent},
      {path: "profile/:userid", component:ProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
