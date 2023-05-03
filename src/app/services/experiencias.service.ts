import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User, Historia } from '../interfaces';
import { AuthService } from './auth.service';
import { API_URL } from '../constantes';

@Injectable({
  providedIn: 'root',
})
export class ExperienciasService {
  private apiUrl: string = API_URL;
  constructor(private http: HttpClient,private authService:AuthService) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken(),
      'Content-Type' : 'application/json'
    }
    ),responseType: 'text' as 'json'
  };



  getExperiencias(idUser: number): Observable<Historia[]> {
    return this.http.get<Historia[]>(`${this.apiUrl}/historias/${idUser}`);
  }
  addHistoria(tipo: string, newHistoria: Historia){    
    return this.http.post<Historia>(`${this.apiUrl}/historias`, newHistoria,this.httpOptions).subscribe();
  }
  modifyHistoria(newHistoria: Historia): void {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<Historia>(`${this.apiUrl}/historias/${newHistoria.id} `, newHistoria,this.httpOptions).subscribe(response=>{
      console.log(response)
    });
  }
  deleteHystory(id:number) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(id)
    this.http.delete(`${this.apiUrl}/historias/${id}`,this.httpOptions).subscribe()
  }
}
