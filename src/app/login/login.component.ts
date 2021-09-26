import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { userName } from './username';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private username: userName = new userName();

    login: any = {
    name: null,
    password: null,
  }
  onSubmit(form) {
    console.log(form);

    console.log(this.login);

    console.log(this.submit)
  }
   submit(){
    this.authService.submit(this.username)
    
    console.log('Entrou');
   this.router.navigate(['/home']);

  }
  constructor(private authService: AuthService,
              private router: Router) { }
      
  ngOnInit(): void {
  }
}

