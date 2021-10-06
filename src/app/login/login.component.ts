import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loginAuthenticated: boolean;
  email: string;
  password: string;
  
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {}
            

ngOnInit() {

    this.login = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]  

     /* this.login = new FormGroup({
        email: new FormControl (null),
        password: new FormControl (null) */  
  });  

  }

 onSubmit(){
console.log(this.login.value);

this.router.navigate(['/home']);

if (this.login.valid){
         this.http
           .post('https://httpbin.org/post',JSON.stringify(this.login.value))
           .subscribe (dados=>{
            console.log(dados);
            //reset form
            // this.login.reset();
            
          },
          
          (Error: any)=>alert('erro')
      );
        }   else {
          console.log('login invalido');  
          Object.keys(this.login).forEach(campo=>{
            console.log(campo);
            const control= this.login.get(campo);
          control.markAllAsTouched
          })  
          
          
          
 }
 
  }
}

