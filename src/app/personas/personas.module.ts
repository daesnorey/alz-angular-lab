import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonProfileComponent } from './componentes/person-profile/person-profile.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { FormularioService } from './services/formulario.service';
import { PersonaFormComponent } from './componentes/persona-form/persona-form.component';

@NgModule({
  declarations: [
    PersonProfileComponent,
    PersonasComponent,
    PersonaFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonasRoutingModule,
  ],
  exports: [
    PersonasComponent
  ],
  providers: [
    FormularioService
  ]
})
export class PersonasModule { }
