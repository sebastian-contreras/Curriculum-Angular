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
  addProyecto(newProyecto:Proyect){
    return this.http.post<Proyect>(`${this.apiUrl}`, newProyecto).subscribe();
  }
  modifyProyecto(newProyecto: Proyect): void {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<Proyect>(`${this.apiUrl}/${newProyecto.id} `, newProyecto).subscribe();
  }
  deleteProyecto(id:number) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(id)
    console.log(`${this.apiUrl}/${id} `)
    this.http.delete(`${this.apiUrl}/${id}`).subscribe()
  }
}
