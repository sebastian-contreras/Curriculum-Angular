import { Component } from '@angular/core';
import { Historia } from './interfaces';
import { EDUCACIONES, EXPERIENCIAS } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  experiencias: Historia[] = EXPERIENCIAS
  educaciones: Historia[] = EDUCACIONES
  seccionExperiencia: string = 'Experiencia';
  seccionEducacion: string = 'Educacion';

}
