import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ChatComponent } from './chat/chat.component';
import { ChatsService } from './chats/chats.service';

@NgModule({
  declarations: [
    ChatComponent,
    MensajesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    ChatComponent,
    MensajesComponent
  ],
  providers:[
    ChatsService
  ]
})
export class ChatModule { }
