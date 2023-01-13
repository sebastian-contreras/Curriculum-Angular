import { Component, Input } from '@angular/core';
import { PROYECTS } from 'src/app/mock';

@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})
export class ProyectoComponentComponent {
  @Input() unidad = PROYECTS[0]
  title: string = "Base de datos de Sistema de salud orientada a Covid-19"
  text: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores cum blanditiis cupiditate adipisci suscipit minima obcaecati dolores, voluptate numquam accusamus architecto incidunt quas fuga quidem modi eum quod. Debitis!"
}
