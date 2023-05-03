import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces';
import { map } from 'rxjs';
import { API_URL } from '../constantes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = API_URL;
  private idSession: number = 0;
  constructor(private http: HttpClient) {}

  login(creeds: Credentials) {
    return this.http
      .post(`${this.apiUrl}/api/v1/auth/authenticate`, creeds, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;
          const bearerToken = headers.get('Authentication')!;
          const {token,user:{id}} = response.body;
          localStorage.setItem('token', token);
          localStorage.setItem('idUsuario',id);
          this.idSession = id;
          console.log(response.body)
          return id;
        })
      );
  }
  registrate(creeds: Credentials) {
    return this.http
      .post(`${this.apiUrl}/api/v1/auth/registrate`, creeds, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;
          const bearerToken = headers.get('Authentication')!;
          const {token,user:{id}} = response.body;
          localStorage.setItem('token', token);
          localStorage.setItem('idUsuario',id);
          console.log(response.body)
          return id;
        })
      );
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getIdSession(){
    return this.idSession || 0;
  }
  getId() {
    return localStorage.getItem('idUsuario');
  }
  logout(){
    localStorage.clear();
  }
}
