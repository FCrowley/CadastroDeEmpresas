import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@NgModule({
    declarations: [ LoginComponent ],

    imports: [ 
      CommonModule,
      ReactiveFormsModule,
      FormsModule ,
      HttpClientModule,
      
    ]
 
})
export class HomeModule { }