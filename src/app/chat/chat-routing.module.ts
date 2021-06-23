import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';

const routes : Routes = [
  {path: '', component : ChatComponent},
  {path: '**', redirectTo: ''},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
  ]
})
export class ChatRoutingModule { }
