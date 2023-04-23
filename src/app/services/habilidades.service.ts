import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Skill } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private apiUrl: string = 'http://localhost:5000/SKILLS';
  constructor(private http: HttpClient) {}
  getSKILLS(idUser: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}`)
  }
}
