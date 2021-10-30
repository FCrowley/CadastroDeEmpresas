
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
  
  private isVisibility: boolean = true;

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

  }


  /*
  
  Explicando a funcionalidade de exibição da senha no input


  Solicitação:

  1- Adicionar um ícone de olho no final do input de senha
  2- O ícone de senha terá dois estados: visibility_off que se trata do olho com um risco no transversal
  e o visibility que se trata do olho sem o risco transversal.
  3- Ao iniciar a tela de login o ícone deverá esta no estado visibility_off. O mesmo só será mudado com a ação do usuário.
  4- Após o usuário clicar no ícone o estado do mesmo deverá ser mudado de visibility_off para visibility.
  5- Sempre que o usuário clicar no ícone o estado deverá ser mudado independente de qual seja no momento da ação.


  Implementação:

  1- No arquivo.html precisamos colocar uma ação/evento, qual ação? acão/evento de clique: (click) na tag onde se encontra o ícone.
  2- Nesta ação/evento de 'click', vamos determinar um método - visibilityPassword() - para ser chamado quando o usuário clicar.
  3- No arquivo.ts vamos criar o método - visibilityPassword() - que definimos no ação/evento click no arquivo.html.
  4- Antes de implementarmos o método, vamos criar uma propriedade privada (pois ela não será usada fora do component) chamada isVisibility
  do tipo booleana. Lembrando que booleana é o tipo que aceita os seguintes valor: true ou false. Como default, sempre que declaramos algo
  do tipo booleana a mesma inicia com o valor false. Então vamos atribuir o valor true na criação. (entenderá o true quando ler a parte do if e else)
  5- Na linha 1: pegamos o elemento html pelo id que possui o id input-senha e jogamos numa constante chamada input para ser manipulada posteriomente.
  6- Na linha 2: pegamos o elemento html pelo id que possui o id visibility e jogamos numa constante chamada visibilityToggle para ser manipulada posteriomente.
  7- Na linha 3: temos um if que verifica se a propriedade declarada esta como false ou true.
  8- Na linha 4: é a primeira linha do if, se entrou no if é porque a condição estava verdadeira, ou seja, a propriedade era true. Com isso, mudamos o html
  onde pegamos as informações e jogamos para constante visibilityToggle e colocamos o valor de visibility que se trata do olho sem o traço transversal.
  9- Na linha 5: mudamos o atributo do html, passamos qual atributo - type - e qual o valor a ser atribuído - text - neste atributo.
  10- Na linha 6: Como mudamos o estado do ícone e do atributo type para text, precisamos mudar a propriedade para false, para quando a ação seja chamada de
  novo não entre no if, entre no else e faça o inverso do que foi feito no if.
  11- Na linha 7: Caso não entre no if, como acamos de falar, o else será executado. Esta é a primeira linha do else, ou seja, a propriedade era false. Com isso,
  mudamos o html onde pegamos as informações e jogamos para constante visibilityToggle e colocamos o valor de visibility_off que se trata do olho com o traço transversal.
  12- Na linha 8: mudamos o atributo do html, passamos qual atributo - type - e qual o valor a ser atribuído - password - neste atributo.
  13- Na linha 9: Como mudamos o estado do ícone e do atributo type para password, precisamos mudar a propriedade para true, para quando a ação seja chamada de
  novo entre no if e faça o inverso do que foi feito no else.

  */

  visibilityPassword() {    
  /* 1 */  const input = document.getElementById('input-senha');
  /* 2 */  const visibilityToggle = document.getElementById('visibility');

  /* 3 */  if (this.isVisibility) { // Outras formas que poderia ser feita: if (this.isVisibility == true), if (this.isVisibility != false) Obs: implementado o recomendado
  /* 4 */    visibilityToggle.innerHTML = 'visibility';
  /* 5 */    input.setAttribute('type', 'text');
  /* 6 */    this.isVisibility = false;
            } else {
  /* 7 */    visibilityToggle.innerHTML = 'visibility_off';
  /* 8 */    input.setAttribute('type', 'password');
  /* 9 */    this.isVisibility = true;
    }
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
