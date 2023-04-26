import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User, Historia } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}
  getUser(idUser: number): Observable<User> {
    console.log(this.http.get<User>(`${this.apiUrl}/users/${idUser}`))
    return this.http.get<User>(`${this.apiUrl}/users/${idUser}`);
  }
  modifyUser(user: User): void {
    var headersnew = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user,{headers:{'Content-Type': 'application/json'}}).subscribe();
  }

}
