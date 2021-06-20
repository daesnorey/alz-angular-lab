import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatInputComponent } from './Componentes/chat-input/chat-input.component';
import { ChatOutputComponent } from './Componentes/chat-output/chat-output.component';
import { ChatParentComponent } from './Componentes/chat-parent/chat-parent.component';
import { ChatService } from './Services/chat/chat-service';

@NgModule({
  declarations: [
    ChatInputComponent,
    ChatOutputComponent,
    ChatParentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ChatInputComponent,
    ChatOutputComponent,
    ChatParentComponent,
    ],
  providers:[
    ChatService
  ]
})
export class ProjectChatModule { }
