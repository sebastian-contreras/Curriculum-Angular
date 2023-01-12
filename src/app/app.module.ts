import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
