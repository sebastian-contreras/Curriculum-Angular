import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Proyect } from '../interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient, private authService: AuthService) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
      'Content-Type' : 'application/json'
    }),responseType: 'text' as 'json'
  };


  getProyects(idUser: number): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(`${this.apiUrl}/proyects/${idUser}`)
  }
  addProyecto(newProyecto:Proyect){
    console.log(newProyecto)
    return this.http.post<Proyect>(`${this.apiUrl}/proyects`, newProyecto,this.httpOptions).subscribe();
  }
  modifyProyecto(newProyecto: Proyect): void {
    console.log((newProyecto))
    this.http.put<Proyect>(`${this.apiUrl}/proyects/${newProyecto.id} `, newProyecto,this.httpOptions).subscribe();
  }
  deleteProyecto(id:number) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(id)
    console.log(`${this.apiUrl}/${id} `)
    this.http.delete(`${this.apiUrl}/proyects/${id}`,this.httpOptions).subscribe()
  }
}
//   if(this.authService.getToken && req.method !== 'GET')
//   req=req.clone({
//     setHeaders:{
//       Authorization:`Bearer ${this.authService.getToken}`
//     }
//   })