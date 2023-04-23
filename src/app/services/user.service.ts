import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User, Historia } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'http://localhost:5000/USERS';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}
  getUser(idUser: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${idUser}`);
  }
  modifyUser(user: User): void {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<User>(`${this.apiUrl}/${user.id}`, user).subscribe();
  }
}
