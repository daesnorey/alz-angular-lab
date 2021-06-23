import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/componentes/personas/personas.component';
import { FormularioRegistroComponent } from './registro/componentes/formulario-registro/formulario-registro.component';

const routes : Routes = [
  {
    path:'chat',
    loadChildren : () => import('./chat/chat.module').then( m => m.ChatModule)
  },
  {
    path : 'personas',
    component : PersonasComponent,
    loadChildren : () => import('./personas/personas.module').then( m => m.PersonasModule)
  },
  {
    path : 'registro',
    component : FormularioRegistroComponent,
  },
  {
    path : '**',
    redirectTo : 'registro',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
