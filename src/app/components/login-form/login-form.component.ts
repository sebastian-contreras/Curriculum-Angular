import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  onClick(){
    console.log(this.form.value)
  }
}
