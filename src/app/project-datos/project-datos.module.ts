import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentePadreDatosComponent } from './Componentes/componente-padre-datos/componente-padre-datos.component';
import { NuevoComponenteComponent } from './Componentes/nuevo-componente/nuevo-componente.component';
import { DatosService } from './Services/data/datos.service';

@NgModule({
  declarations: [
    ComponentePadreDatosComponent,
    NuevoComponenteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    ComponentePadreDatosComponent
  ],
  providers:[
    DatosService
  ]
})
export class ProjectDatosModule { }
