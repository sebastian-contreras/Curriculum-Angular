import { Component, Input } from '@angular/core';
import { EDUCACIONES, EXPERIENCIAS } from 'src/app/mock';
import { Historia } from 'src/app/interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { ExperienciasService } from 'src/app/services/experiencias.service';
@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  constructor(private historiaServicio: ExperienciasService){}
  @Input() title: string =""
  @Input() arreglo: Historia[] = EXPERIENCIAS
  @Input() usuarioId: number = 0
  form = new FormGroup({
    titulo: new FormControl(""),
    lugar: new FormControl(""),
    imagen: new FormControl(''),
    fecha: new FormControl('')
  });

  onClick(){
    console.log(this.form.value)
    let newHistoria: Historia = {idUser:this.usuarioId,title:this.form.value.titulo||"",place:this.form.value.lugar||"",image:this.form.value.imagen||"",date:this.form.value.fecha||""}
    console.log(newHistoria)
    console.log(this.title)
    if(this.title==='Experiencia'){
      this.historiaServicio.addHistoria('EXPERIENCIAS',newHistoria)
      this.arreglo.push(newHistoria)
      console.log('holaa expero')
    }
    else{
      this.historiaServicio.addHistoria('EDUCACIONES',newHistoria)
      this.arreglo.push(newHistoria)
      console.log('holaa edicacopm')

    }
  }

}
