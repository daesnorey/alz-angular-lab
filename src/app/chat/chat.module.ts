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
import { ChatRoutingModule } from './chat-routing.module';
import { ChatTestComponent } from './components/chat-test/chat-test.component';
import { ChatWrapperComponent } from './components/chat-wrapper/chat-wrapper.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    PersonalChatComponent,
    PersonalChatInputComponent,
    PersonalChatMessageListComponent,
    TestComponent,
    ChatTestComponent,
    ChatWrapperComponent,
    Test1Component,
    Test2Component,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ChatRoutingModule,
  ],
  providers: [
    ChatService,
  ],
  exports: [
  ]
})
export class ChatModule { }
