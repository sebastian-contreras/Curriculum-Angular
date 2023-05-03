import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User, Historia } from '../interfaces';
import { AuthService } from './auth.service';
import { API_URL } from '../constantes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = API_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private authService : AuthService) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
      'Content-Type' : 'application/json'
    }
    ),responseType: 'text' as 'json'
  };


  getUser(idUser: number): Observable<User> {
    console.log(this.http.get<User>(`${this.apiUrl}/users/${idUser}`))
    return this.http.get<User>(`${this.apiUrl}/users/${idUser}`);
  }
  modifyUser(user: User): void {
    console.log(user)
    this.http.put<User>(`${this.apiUrl}/users/${user.id}`,user,this.httpOptions).subscribe();
  }

}
