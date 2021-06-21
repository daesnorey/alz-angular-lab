import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './componentes/personas/personas.component';

const routes : Routes = [
  {path:'personas', component:PersonasComponent},
  {path:'**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PersonasRoutingModule { }
