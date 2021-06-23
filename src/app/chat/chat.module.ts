import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalChatComponent } from './componentes/personal-chat/personal-chat.component';
import { TableChatComponent } from './componentes/table-chat/table-chat.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    PersonalChatComponent,
    TableChatComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
  ],
  exports: [
    ChatComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
