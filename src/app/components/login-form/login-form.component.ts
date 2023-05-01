import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    email: new FormControl(),
    password: new FormControl()
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
      this.router.navigate(['/']);
    })
  }
}
