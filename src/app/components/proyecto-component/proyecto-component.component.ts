import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { PROYECTS } from 'src/app/mock';
import { FormControl, FormGroup } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos.service';
@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})
export class ProyectoComponentComponent {
  constructor(private proyectosService:ProyectosService){}
  @Output() SacarDatoPadre = new EventEmitter<number>();
  @Input() unidad = PROYECTS[0]
  @Input() session : boolean = false;

  form = new FormGroup({
    tituloForm: new FormControl(),
    textForm: new FormControl(),
    urlForm: new FormControl(),
  });
  title: string = "Base de datos de Sistema de salud orientada a Covid-19"
  text: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores cum blanditiis cupiditate adipisci suscipit minima obcaecati dolores, voluptate numquam accusamus architecto incidunt quas fuga quidem modi eum quod. Debitis!"
  onClick(){
    this.unidad.text = this.form.value.textForm
    this.unidad.title = this.form.value.tituloForm
    this.unidad.url = this.form.value.urlForm
    this.proyectosService.modifyProyecto(this.unidad)
  }
  onClickDelete(){
    this.SacarDatoPadre.emit(this.unidad.id)
    this.proyectosService.deleteProyecto(this.unidad.id||0)
  }
}
