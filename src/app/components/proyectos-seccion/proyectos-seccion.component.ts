import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Proyect } from 'src/app/interfaces';
import { PROYECTS } from 'src/app/mock';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos-seccion',
  templateUrl: './proyectos-seccion.component.html',
  styleUrls: ['./proyectos-seccion.component.css'],
})
export class ProyectosSeccionComponent {
  constructor(private proyectosService: ProyectosService) {}
  @Input() proyectos: Proyect[] = PROYECTS;
  @Input() usuarioId: number = 0  ;
  @Input() session : boolean = false;

  form = new FormGroup({
    tituloForm: new FormControl(),
    textForm: new FormControl(),
    urlForm: new FormControl(),
  });
  onClick() {
    console.log(this.form.value);
    let newProyecto: Proyect = {
      idusuario: this.usuarioId,
      title: this.form.value.tituloForm,
      text: this.form.value.textForm,
      url: this.form.value.urlForm,
    };
    console.log(this.usuarioId)
    this.proyectos.push(newProyecto);
    this.proyectosService.addProyecto(newProyecto);
    this.form.reset()

  }
  SacarProyectoArray(idEliminar: number) {
    this.proyectos = this.proyectos.filter(
      (proyectoUni) => proyectoUni.id != idEliminar
    );
  }
}
