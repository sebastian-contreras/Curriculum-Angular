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
  providedIn: 'root'
})

export class ExperienciasService {
    private apiUrl: string = 'http://localhost:5000/';
  
    constructor(private http: HttpClient) {}
  
    getExperiencias(idUser: number,tipo:string): Observable<Historia[]> {
      return this.http.get<Historia[]>(`${this.apiUrl}${tipo} `)
    }
  }

