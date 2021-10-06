import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: any;
  email: string;
  password: string;
  loginAuthenticated: boolean;
  router: any;

  constructor() { }

  onSubmit(){
    console.log(this.login.value);
    
    if (this.email === 'username@mail.com' &&
      this.password === '12345678'){
    
        this.loginAuthenticated = true;
    
    this.router.navigate(['/home']);
    
    }  else {
      this.loginAuthenticated = false;
    }
}
 }
