import { Component } from '@angular/core';
import { Proyect } from 'src/app/interfaces';
import { PROYECTS } from 'src/app/mock';

@Component({
  selector: 'app-proyectos-seccion',
  templateUrl: './proyectos-seccion.component.html',
  styleUrls: ['./proyectos-seccion.component.css']
})
export class ProyectosSeccionComponent {
  proyectos: Proyect[] = PROYECTS

}
