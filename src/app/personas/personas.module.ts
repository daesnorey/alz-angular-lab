import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './componentes/form/form.component';
import { FormsModule } from '@angular/forms';
import { PersonProfileComponent } from './componentes/person-profile/person-profile.component';
import { PersonasComponent } from './componentes/personas/personas.component';




@NgModule({
  declarations: [
    FormComponent,
    PersonProfileComponent,
    PersonasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonasModule,
    
  ],
  exports: [
    PersonasComponent,
    PersonasModule
  ]
})
export class PersonasModule { }
