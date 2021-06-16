import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { PersonalChatInputComponent } from './personal-chat-input/personal-chat-input.component';
import { PersonalChatMessageListComponent } from './personal-chat-message-list/personal-chat-message-list.component';
import { DataService } from './data.service';

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
