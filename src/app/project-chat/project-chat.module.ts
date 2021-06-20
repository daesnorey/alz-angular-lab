import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponentInputComponent } from './Componentes/chat-component-input/chat-component-input.component';
import { ComponentParentChatComponent } from './Componentes/component-parent-chat/component-parent-chat.component';
import { ChatService } from './Services/chat/chat-service';
import { NuevoComponenteHijoComponent } from './Componentes/nuevo-componente-hijo/nuevo-componente-hijo.component';

@NgModule({
  declarations: [
    ChatComponentInputComponent,
    ComponentParentChatComponent,
    NuevoComponenteHijoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ChatComponentInputComponent,
    ComponentParentChatComponent,
    NuevoComponenteHijoComponent,
  ],
  providers:[
    ChatService
  ]
})
export class ProjectChatModule { }
