import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioRegistroComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormularioRegistroComponent,
  ]
})
export class RegistroModule { }
