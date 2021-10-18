import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';


import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { FormCompanyFindComponent } from './company/form-company-find/form-company-find.component';
import { FormCompanyRegisterComponent } from './company/form-company-register/form-company-register.component';
import { FormUserFindComponent } from './user/form-user-find/form-user-find.component';
import { FormUserRegisterComponent } from './user/form-user-register/form-user-register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    FormCompanyFindComponent,
    FormCompanyRegisterComponent,
    FormUserFindComponent,
    FormUserRegisterComponent,
    HomeComponent,
    UserComponent,
    ForgetPasswordComponent,
  
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    HomeModule,
    FormsModule,
        
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
