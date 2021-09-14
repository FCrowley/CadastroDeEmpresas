import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string;
  typeForm: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "Gerenciamento de Usuário";
  }

  callActionUser(type) {
    this.typeForm = type;
    if (type == 'cadastrar') {      
      this.cadastroUsuario();
    }
    else if (type == 'visualizar') {      
      this.visualizarUsuario();
    }
  }

  cadastroUsuario() {    
    this.title = 'Cadastro de Usuário';
  }

  visualizarUsuario() {    
    this.title = 'Vizualizar Usuário';
  }
}
