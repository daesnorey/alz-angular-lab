import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path: 'chat',
    loadChildren : () => import('./chat/chat.module').then(m=> m.ChatModule),
  },
  {
    path: 'formulario',
    component : FormularioComponent
  },
  {
    path: '**',
    redirectTo: 'chat',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
