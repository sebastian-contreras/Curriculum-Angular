import { Component, OnInit } from '@angular/core';
import { Historia, Proyect, Skill, User } from '../../interfaces';
import { EDUCACIONES, EXPERIENCIAS, PROYECTS, SKILLS, USERS } from '../../mock';
import { UserService } from '../../services/user.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { ExperienciasService } from 'src/app/services/experiencias.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  experiencias: Historia[] = EXPERIENCIAS;
  educaciones: Historia[] = EDUCACIONES;
  habilidades: Skill[] = SKILLS;
  proyectos: Proyect[] = PROYECTS;
  seccionExperiencia: string = 'Experiencia';
  seccionEducacion: string = 'Educacion';
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    fullName: '',
    aboutMe: '',
    shortEducation: '',
    image: '',
    portraitImage: '',
  };
  constructor(
    private userService: UserService,
    private habilidadesService: HabilidadesService,
    private proyectoService: ProyectosService,
    private experienciaService: ExperienciasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(route.snapshot.params['id']);
  }
  ngOnInit() {
    const idUsuario = Number(this.route.snapshot.params['id']);
    this.userService
      .getUser(idUsuario)
      .pipe(
        catchError((err) => {
          this.router.navigate(['/login']);
          return throwError(err);
        })
      )
      .subscribe((user) => {
        this.user = user;
      });

    this.experienciaService
      .getExperiencias(idUsuario, 'EXPERIENCIAS')
      .subscribe((experiencias) => {
        this.experiencias = experiencias;
      });

    this.experienciaService
      .getExperiencias(idUsuario, 'EDUCACIONES')
      .subscribe((educaciones) => {
        this.educaciones = educaciones;
      });

    this.habilidadesService.getSKILLS(idUsuario).subscribe((skill) => {
      this.habilidades = skill;
    });

    this.proyectoService.getProyects(idUsuario).subscribe((proyectos) => {
      this.proyectos = proyectos;
    });
  }
}
