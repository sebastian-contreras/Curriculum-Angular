import { Component } from '@angular/core';
import {USERS} from '../../mock'
import {User} from '../../interfaces'
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  usuario: User = USERS[0]
  text: string = USERS[0].aboutMe
}
