import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { FormCompanyFindComponent } from './company/form-company-find/form-company-find.component';
import { FormCompanyRegisterComponent } from './company/form-company-register/form-company-register.component';
import { FormUserFindComponent } from './user/form-user-find/form-user-find.component';
import { FormUserRegisterComponent } from './user/form-user-register/form-user-register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    FormCompanyFindComponent,
    FormCompanyRegisterComponent,
    FormUserFindComponent,
    FormUserRegisterComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
