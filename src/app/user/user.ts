export class User {
    id: number;
    active: number;
    fullname: string;
    username: string;
    cell: number;
    guid: string;
    registrationDate: string;
    changeDate: string;

    constructor( email: string, password: string) {
       
        this.email = email;
        this.password = password;
      }
      
      email: string;
      password: string;
    }
