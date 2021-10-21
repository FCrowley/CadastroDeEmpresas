
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
  [x: string]: any;

  loginForm: FormGroup;
  loginFormAuthenticated: boolean;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/home']);
    if (this.loginForm.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.loginForm.value))
        .subscribe(dados => {
          console.log(dados);
        },
          (Error: any) => alert('erro'));
    } else {
      console.log('login invalido');
      Object.keys(this.loginForm).forEach(campo => {
        console.log(campo);
        const control = this.loginForm.get(campo);
        control.markAllAsTouched
      })
    }
    const visibilityToggle = document.querySelector('.visibility');

    const input = document.querySelector('.input-container input');

    var password = true;

    visibilityToggle.addEventListener('click', function () {
      if (password) {
        input.setAttribute('type', 'text');
        visibilityToggle.innerHTML = 'visibility';
      } else {
        input.setAttribute('type', 'password');
        visibilityToggle.innerHTML = 'visibility_off';
      }
      password = !password;
      
    });
  }
  ChecksValidTouched(campo: string | (string | number)[]) {
    return !this.loginForm.get(campo).valid && this.loginForm.get(campo).touched;
  }

  directForgetPassword() {
    this.router.navigate(['/forget-password']);
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

}
