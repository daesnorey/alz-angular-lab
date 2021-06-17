import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponentInputComponent } from './chat-component-input/chat-component-input.component';
import { ComponentParentChatComponent } from './component-parent-chat/component-parent-chat.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoComponenteHijoComponent } from './nuevo-componente-hijo/nuevo-componente-hijo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NuevoComponenteComponent,
    NuevoComponenteHijoComponent,
    ComponentParentChatComponent,
    ChatComponentInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    NuevoComponenteComponent,
    NuevoComponenteHijoComponent,
    ComponentParentChatComponent,
    ChatComponentInputComponent
  ]
})
export class ProjectChatModule { }
