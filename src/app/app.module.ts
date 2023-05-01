import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ComponentHistoriaComponent } from './components/component-historia/component-historia.component';
import { HardComponent } from './components/hard/hard.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ProyectosSeccionComponent } from './components/proyectos-seccion/proyectos-seccion.component';
import { ProyectoComponentComponent } from './components/proyecto-component/proyecto-component.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CabeceraComponent,
    AboutMeComponent,
    SeccionComponent,
    ComponentHistoriaComponent,
    HardComponent,
    ProgressComponent,
    ProyectosSeccionComponent,
    ProyectoComponentComponent,
    HomeComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
