import { Component, Input } from '@angular/core';
import { HISTORIAS } from 'src/app/mock';
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
  @Input() arreglo: Historia[] = HISTORIAS
  @Input() usuarioId: number = 0
  form = new FormGroup({
    titulo: new FormControl(""),
    lugar: new FormControl(""),
    imagen: new FormControl(''),
    fecha: new FormControl('')
  });

  onClick(){
    console.log(this.form.value)
    console.log(this.title)
    if(this.title==='Experiencia'){
      let newHistoria: Historia = {idusuario:this.usuarioId,tipo:false,title:this.form.value.titulo||"",place:this.form.value.lugar||"",image:this.form.value.imagen||"",date:this.form.value.fecha||""}
      this.historiaServicio.addHistoria('EXPERIENCIAS',newHistoria)
      this.arreglo.push(newHistoria)
      console.log('holaa expero')
    }
    else{
      let newHistoria: Historia = {idusuario:this.usuarioId,tipo:true,title:this.form.value.titulo||"",place:this.form.value.lugar||"",image:this.form.value.imagen||"",date:this.form.value.fecha||""}
      this.historiaServicio.addHistoria('EDUCACIONES',newHistoria)
      this.arreglo.push(newHistoria)
      console.log('holaa edicacopm')

    }
  }
  SacarHistoriaArray(idEliminar:number){
    console.log('componente padre')
    this.arreglo = this.arreglo.filter(historia => historia.id != idEliminar)
  }

}
