import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Proyect } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl: string = 'http://localhost:5000/PROYECTS';
  constructor(private http: HttpClient) {}
  getProyects(idUser: number): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(`${this.apiUrl}`)
  }
}
