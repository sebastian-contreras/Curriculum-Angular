import { Component, Input } from '@angular/core';
import { EDUCACIONES, EXPERIENCIAS } from 'src/app/mock';
import { Historia } from 'src/app/interfaces';
@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  @Input() title: string =""
  @Input() arreglo: Historia[] = EXPERIENCIAS

}
