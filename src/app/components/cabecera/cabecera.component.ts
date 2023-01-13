import { Component } from '@angular/core';
import { User } from 'src/app/interfaces';
import { USERS } from 'src/app/mock';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  usuario : User = USERS[0]
  urlPortada: string = this.usuario.portraitImage
  urlPerfil: string = this.usuario.image
  nombre: string = this.usuario.fullName
  educacion: string = this.usuario.shortEducation
}
