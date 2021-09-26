import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@NgModule({
    declarations: [ LoginComponent ],

    imports: [ 
      CommonModule,
      ReactiveFormsModule,
      FormsModule 
    ]
 
})
export class HomeModule { }