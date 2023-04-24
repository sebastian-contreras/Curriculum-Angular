import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User, Historia } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ExperienciasService {
  private apiUrl: string = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  getExperiencias(idUser: number): Observable<Historia[]> {
    return this.http.get<Historia[]>(`${this.apiUrl}HISTORIAS`);
  }
  addHistoria(tipo: string, newHistoria: Historia){
    console.log(`${this.apiUrl}`);
    return this.http.post<Historia>(`${this.apiUrl}HISTORIAS`, newHistoria).subscribe();
  }
  modifyHistoria(newHistoria: Historia): void {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<Historia>(`${this.apiUrl}HISTORIAS/${newHistoria.id} `, newHistoria).subscribe();
  }
  deleteHystory(id:number) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(id)
    console.log(`${this.apiUrl}HISTORIAS/${id} `)
    this.http.delete(`${this.apiUrl}HISTORIAS/${id}`).subscribe()
  }
}
