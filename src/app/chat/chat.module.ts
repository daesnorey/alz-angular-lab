import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonalChatComponent } from './componentes/personal-chat/personal-chat.component';
import { TableChatComponent } from './componentes/table-chat/table-chat.component';
import { ChatComponent } from './componentes/chat/chat.component';



@NgModule({
  declarations: [
    PersonalChatComponent,
    TableChatComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
