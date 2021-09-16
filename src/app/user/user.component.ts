import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string;
  typeForm: string;

  userModel: User;
  user: any;

  constructor( private userService: UserService) { }

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

  teste(){
    console.log('teste component');
    const dados = `{"id": 0,"active": 0,"fullname": "string","username": "string","password": "string","email": "string","cell": 0,"guid": "3fa85f64-5717-4562-b3fc-2c963f66afa6","registrationDate": "string","changeDate": "string"}`;

    this.user = JSON.parse(dados);    
    
    this.userService.insertRegister(this.userModel);    
  }
}
