import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatServiceService } from './services/chat-service.service';

import { ChatComponent } from './components/chat/chat.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MessageReceiverComponent } from './components/message-receiver/message-receiver.component';


@NgModule({
  declarations: [
    ChatComponent,
    MessageSenderComponent,
    MessageReceiverComponent
  ],
  imports: [
    CommonModule,    
  ],
  providers: [
    ChatServiceService,
  ]
})
export class ChatModule { }
