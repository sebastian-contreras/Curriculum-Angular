import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title:String = "";
  @Input() session: boolean = false;
  @Input() user?: User;
  constructor(private router: Router){}

  ngOnInit() {
    console.log(this.title)
  }

  login(){
    this.router.navigate(['/login']);
  }  
}
