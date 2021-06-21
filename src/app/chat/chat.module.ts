import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chat/chat.service';
import { PrimerChatComponent } from './primer-chat/primer-chat.component';
import { SegundoChatComponent } from './segundo-chat/segundo-chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrimerChatComponent,
    SegundoChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers:[
    ChatService,
  ],
  exports : [
    PrimerChatComponent,
    SegundoChatComponent
  ]
})
export class ChatModule { }
