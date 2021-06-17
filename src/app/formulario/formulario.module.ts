import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponentComponent } from './componentes/formulario-component/formulario-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormularioComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioComponentComponent

  ]
})
export class FormularioModule { }
