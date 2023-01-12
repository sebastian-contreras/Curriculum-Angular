import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  urlPortada: string = "./assets/images/portada.jpg"
  urlPerfil: string = "./assets/images/thumbnail.jpg"
  nombre: string = "Sebastian Contreras"
  educacion: string = "Ingenieria en Computacion - Facet"
}
