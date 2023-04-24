import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {USERS} from '../../mock'
import {User} from '../../interfaces'
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  constructor(private userService: UserService){}
  @Input() informacion: User = USERS[0]
  form = new FormGroup({
    textoArea: new FormControl(""),
  });
  onClick(){
    this.informacion.aboutMe = this.form.value.textoArea || ""
    this.userService.modifyUser(this.informacion)
  }
}
