import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NuevoFormularioComponent } from './nuevo-formulario/nuevo-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NuevoFormularioComponent,
  }
];

@NgModule({
  declarations: [
    NuevoFormularioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class NuevoFormularioModule { }
