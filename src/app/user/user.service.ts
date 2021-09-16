import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  // insertRegister(dados: User) {
  //   console.log('teste service');

  //   const url = this.url + '/User/InsertRegister';

  //   return this.http.post<any>(url, dados, {
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  // }

  insertRegister(dados: User) {
    console.log('teste service');
    const url = this.url + '/User/InsertRegister';
    return this.http.post(url, dados, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
