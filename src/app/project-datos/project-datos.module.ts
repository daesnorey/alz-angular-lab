import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentePadreDatosComponent } from './Componentes/personal-data-parent/personal-data-parent.component';
import { NuevoComponenteComponent } from './Componentes/personal-data-hijo/personal-data-hijo.component';
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
