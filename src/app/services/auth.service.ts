import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080';
  public estado: boolean = false;
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
          this.estado = true
          localStorage.setItem('token', token);
          localStorage.setItem('idUsuario',id);
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
          this.estado = true
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
  getEstado() {
    return this.estado;
  }
  getId() {
    return localStorage.getItem('idUsuario');
  }
}
