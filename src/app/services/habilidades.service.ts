import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Skill } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private apiUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  getSKILLS(idUser: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills/${idUser}`)
  }
  addSkills(newSkill:Skill){
    return this.http.post<Skill>(`${this.apiUrl}/skills`, newSkill).subscribe();
  }
  modifySkill(newSkill: Skill): void {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put<Skill>(`${this.apiUrl}/skills/${newSkill.id} `, newSkill).subscribe();
  }
  deleteSkill(id:number) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(id)
    console.log(`${this.apiUrl}/${id} `)
    this.http.delete(`${this.apiUrl}/skills/${id}`).subscribe()
  }
}
