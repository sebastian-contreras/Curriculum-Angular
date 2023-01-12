import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSeccionComponent } from './proyectos-seccion.component';

describe('ProyectosSeccionComponent', () => {
  let component: ProyectosSeccionComponent;
  let fixture: ComponentFixture<ProyectosSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
