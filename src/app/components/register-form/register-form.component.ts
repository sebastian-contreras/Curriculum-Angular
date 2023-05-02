import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

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
 creds: Credentials = {
  fullname:'',
  email:'',
  password:''
}
 constructor(private authService: AuthService,private router: Router){}
 onClick(){
  console.log(this.form.value)
  this.authService.registrate(this.creds)
  .subscribe(response=>{
    const id = response

    this.router.navigate([`/${id}`]);
  })
}
}

