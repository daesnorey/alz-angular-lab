import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chat/chat.service';
import { PrimerChatComponent } from './primer-chat/primer-chat.component';
import { SegundoChatComponent } from './segundo-chat/segundo-chat.component';
import { FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatWrapperComponent } from './chat-wrapper/chat-wrapper.component';



@NgModule({
  declarations: [
    PrimerChatComponent,
    SegundoChatComponent,
    ChatWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
  ],
  providers:[
    ChatService,
  ],
  exports : [
  ]
})
export class ChatModule { }
