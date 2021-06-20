import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PersonalDataChildComponent } from './Componentes/personal-data-child/personal-data-child.component';
import { PersonalDataPaternComponent } from './Componentes/personal-data-parent/personal-data-parent.component';
import { DatosService } from './Services/data/datos.service';

@NgModule({
  declarations: [
    PersonalDataChildComponent,
    PersonalDataPaternComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    PersonalDataPaternComponent
  ],
  providers:[
    DatosService
  ]
})
export class ProjectDatosModule { }
