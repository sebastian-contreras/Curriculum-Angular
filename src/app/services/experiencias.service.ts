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
  private apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getExperiencias(idUser: number): Observable<Historia[]> {
    return this.http.get<Historia[]>(`${this.apiUrl}/historias/${idUser}`);
  }
  addHistoria(tipo: string, newHistoria: Historia){
    console.log(`${this.apiUrl}`);
    return this.http.post<Historia>(`${this.apiUrl}/historias`, newHistoria).subscribe();
  }
  modifyHistoria(newHistoria: Historia): void {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<Historia>(`${this.apiUrl}/historias/${newHistoria.id} `, newHistoria).subscribe();
  }
  deleteHystory(id:number) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(id)
    this.http.delete(`${this.apiUrl}/historias/${id}`).subscribe()
  }
}
