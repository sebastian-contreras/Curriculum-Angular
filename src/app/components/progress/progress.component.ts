import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { SKILLS } from 'src/app/mock';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() skill: Skill = SKILLS[0]
  title: string = this.skill.title
  porcentaje : number = this.skill.percent


}
