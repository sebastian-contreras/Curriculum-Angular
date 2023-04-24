import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces';
import { USERS } from 'src/app/mock';
import { FormControl,FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor(private userService:UserService){}
  @Input() usuario:  User = USERS[0];

  form = new FormGroup({
    urlPerfilForm : new FormControl(),
    urlCabeceraForm : new FormControl(),
    educacionForm : new FormControl()
  })
  onClick(){
    this.usuario.portraitImage = this.form.value.urlCabeceraForm
    this.usuario.image = this.form.value.urlPerfilForm
    this.usuario.shortEducation = this.form.value.educacionForm
    this.userService.modifyUser(this.usuario)
  }
}
