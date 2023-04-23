import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { SKILLS } from 'src/app/mock';
@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent {
  title: string = " Hard skills & Soft skills"
  @Input() habilidades: Skill[] = SKILLS;
}