import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { PersonalChatInputComponent } from './personal-chat-input/personal-chat-input.component';
import { PersonalChatMessageListComponent } from './personal-chat-message-list/personal-chat-message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    PersonalChatComponent,
    PersonalChatInputComponent,
    PersonalChatMessageListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
