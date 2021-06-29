import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './cliente/client/client.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegistroUsuarioComponent } from './registro/registro-usuario/registro-usuario.component';

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
    path: 'registro',
    component : RegistroUsuarioComponent
  },
  {
    path: 'cliente',
    component : ClientComponent
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
