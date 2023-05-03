import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  form = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    contrasena: new FormControl('',[Validators.required,Validators.minLength(4)]),
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
  });
  creds: Credentials = {
    fullname: '',
    email: '',
    password: '',
  };
  constructor(private authService: AuthService, private router: Router) {}
  onClick() {
    console.log(this.form.value);
    this.authService.registrate(this.creds).subscribe((response) => {
      const id = response;

      this.router.navigate([`/${id}`]);
    });
  }

  get fullname(){
    return this.form.get('nombre')
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('contrasena');
  }
}
