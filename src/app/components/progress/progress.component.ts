import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { SKILLS } from 'src/app/mock';
import { FormControl, FormGroup } from '@angular/forms';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  constructor(private skillService: HabilidadesService){}
  form = new FormGroup({
    habilidadNombre: new FormControl(),
    porcentajeForm: new FormControl()
  });
  @Output() SacarDatoPadre = new EventEmitter<number>();
  @Input() skill: Skill = SKILLS[0]
  @Input() session : boolean = false;
  title: string = this.skill.title
  porcentaje : number = this.skill.percent

  onClick(){
    console.log(this.form.value)
    this.skill.percent = this.form.value.porcentajeForm
    this.skill.title = this.form.value.habilidadNombre
    this.skillService.modifySkill(this.skill)
  }
  onClickDelete(){
    this.skillService.deleteSkill(this.skill.id||0)
    this.SacarDatoPadre.emit(this.skill.id || 0)

  }

}
