import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { FormCompanyRegisterComponent } from './company/form-company-register/form-company-register.component';
import { FormCompanyFindComponent } from './company/form-company-find/form-company-find.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CompanyComponent,
    FormCompanyRegisterComponent,
    FormCompanyFindComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
