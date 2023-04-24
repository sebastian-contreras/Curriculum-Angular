import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/interfaces';
import { SKILLS } from 'src/app/mock';
import { HabilidadesService } from 'src/app/services/habilidades.service';
@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent {
  constructor(private skillService:HabilidadesService){}
  title: string = " Hard skills & Soft skills"
  form = new FormGroup({
    habilidadNombre: new FormControl(),
    porcentajeForm: new FormControl()
  });
  @Input() usuarioId: number = 0;
  @Input() habilidades: Skill[] = SKILLS;
  onClick(){
    console.log(this.form.value)
    let newSkill  :Skill = {title: this.form.value.habilidadNombre,percent: this.form.value.porcentajeForm,idUser:this.usuarioId};
    this.habilidades.push(newSkill)
    this.skillService.addSkills(newSkill)
  }
  SacarSkillArray(idEliminar:number){
    console.log('componente padre')
    this.habilidades = this.habilidades.filter(habilidadUni => habilidadUni.id != idEliminar)
  }
}