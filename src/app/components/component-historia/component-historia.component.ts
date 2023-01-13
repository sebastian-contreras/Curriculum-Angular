import { Component, Input } from '@angular/core';
import { Historia } from 'src/app/interfaces';
import { EDUCACIONES, EXPERIENCIAS } from 'src/app/mock';
@Component({
  selector: 'app-component-historia',
  templateUrl: './component-historia.component.html',
  styleUrls: ['./component-historia.component.css'],
})
export class ComponentHistoriaComponent {
  @Input() cardHistoria: Historia = EXPERIENCIAS[1];


}

