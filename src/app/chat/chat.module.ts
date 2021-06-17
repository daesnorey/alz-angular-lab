import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatService } from './services/chat/chat.service';

import { PersonalChatComponent } from './components/personal-chat/personal-chat.component';
import { PersonalChatInputComponent } from './components/personal-chat-input/personal-chat-input.component';
import { PersonalChatMessageListComponent } from './components/personal-chat-message-list/personal-chat-message-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    PersonalChatComponent,
    PersonalChatInputComponent,
    PersonalChatMessageListComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    ChatService,
  ],
  exports: [
    PersonalChatComponent,
    PersonalChatInputComponent,
    PersonalChatMessageListComponent,
  ]
})
export class ChatModule { }
