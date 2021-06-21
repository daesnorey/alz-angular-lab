import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatServiceService } from './services/chat-service.service';

import { ChatComponent } from './components/chat/chat.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MessageReceiverComponent } from './components/message-receiver/message-receiver.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    MessageSenderComponent,
    MessageReceiverComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
  ],
  exports:[
    ChatComponent,
    MessageReceiverComponent,
    MessageSenderComponent,
  ],
  providers: [
    ChatServiceService,
  ]
})
export class ChatModule { }
