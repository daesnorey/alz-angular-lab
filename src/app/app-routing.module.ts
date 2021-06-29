import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chats/components/chat/chat.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TestComponent } from './test/test.component';

const routes= [
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'personal-data',
    component: TestComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: '**',
    redirectTo: 'chat'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
