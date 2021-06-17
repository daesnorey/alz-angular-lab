import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './componentes/form/form.component';
import { PersonProfileComponent } from './componentes/person-profile/person-profile.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormComponent,
    PersonProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    PersonProfileComponent
  ]
})
export class PersonasModule { }
