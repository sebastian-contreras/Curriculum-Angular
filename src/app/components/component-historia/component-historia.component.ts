import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Historia } from 'src/app/interfaces';
import { HISTORIAS } from 'src/app/mock';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ExperienciasService } from 'src/app/services/experiencias.service';

@Component({
  selector: 'app-component-historia',
  templateUrl: './component-historia.component.html',
  styleUrls: ['./component-historia.component.css'],
})
export class ComponentHistoriaComponent {
  constructor(private historiaService: ExperienciasService){}
  @Input() cardHistoria: Historia = HISTORIAS[1];
  @Output() SacarDatoPadre = new EventEmitter<number>();
  form = new FormGroup({
    titulo: new FormControl(),
    lugar: new FormControl(),
    imagen: new FormControl(),
    fecha: new FormControl()
  });

  onClickDelete(){
    this.SacarDatoPadre.emit(this.cardHistoria.id || 0)
    this.historiaService.deleteHystory(this.cardHistoria.id || 0)
  }
  onClick(){
    this.cardHistoria.title = this.form.value.titulo
    this.cardHistoria.image = this.form.value.imagen
    this.cardHistoria.place = this.form.value.lugar
    this.cardHistoria.date = this.form.value.fecha
    this.historiaService.modifyHistoria(this.cardHistoria)
  }
}

