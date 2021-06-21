import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ChatComponent } from './chat/chat.component';
import { ChatsService } from './chats/chats.service';
import { ChatParentComponent } from './chat-parent/chat-parent.component';

@NgModule({
  declarations: [
    ChatComponent,
    MensajesComponent,
    ChatParentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    ChatComponent,
    MensajesComponent,
    ChatParentComponent
  ],
  providers:[
    ChatsService
  ]
})
export class ChatModule { }
