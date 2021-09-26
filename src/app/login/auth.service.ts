import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userName } from './username';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userNameAuthenticated: Boolean = false

  constructor(private router: Router) { }

  submit(username: userName){

    if(username.email === 'usuario@email.com' && 
       username.password === '12345678'){

        this.userNameAuthenticated = true;

        this.router.navigate(['/home']);
         
    }
    else this.userNameAuthenticated = false
  }
}
