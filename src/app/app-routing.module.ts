import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/componentes/personas/personas.component';

const routes : Routes = [
  {
    path:'chat',
    loadChildren : () => import('./chat/chat.module').then( m => m.ChatModule)
  },
  {
    path : 'personas',
    component : PersonasComponent,
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
