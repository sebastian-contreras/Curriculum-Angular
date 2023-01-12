import { Component } from '@angular/core';

@Component({
  selector: 'app-component-historia',
  templateUrl: './component-historia.component.html',
  styleUrls: ['./component-historia.component.css']
})
export class ComponentHistoriaComponent {
  title: string ="Backend Developer"
  img: string = "./assets/images/trabajos/globant.png"
  text: string = "Globant - Jornada Parcial"
  fecha: string = "2014-2020"
}
