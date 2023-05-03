import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  creds: Credentials = {
    email:'',
    password:''
  }
  constructor(private authService: AuthService,private router: Router){}
  onClick(){
    console.log(this.form.value)
    this.authService.login(this.creds)
    .subscribe(response=>{
      const id = response
// console.log(id)
// console.log(response)
      this.router.navigate([`/${id}`]);
    })
  }

  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
}
