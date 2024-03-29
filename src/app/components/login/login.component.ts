import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,private router: Router){}
  ngOnInit(){
   const  sesion = this.authService.getId()
   if(sesion){
    this.router.navigate([`/${sesion}`]);
   }
  }
}
