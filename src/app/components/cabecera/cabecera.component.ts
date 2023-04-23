import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces';
import { USERS } from 'src/app/mock';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() usuario:  User = USERS[0];

}
