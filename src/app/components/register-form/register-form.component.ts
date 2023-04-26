import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
 form = new FormGroup({
  email: new FormControl(),
  contrasena: new FormControl(),
  nombre: new FormControl()
 })
 onClick(){
  console.log(this.form.value)
}
}

