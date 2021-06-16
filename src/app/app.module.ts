import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form-parent/form/form.component';
import { ChatComponent } from './chat-parent/chat/chat.component';
import { ChatMessagesComponent } from './chat-parent/chat-messages/chat-messages.component';
import { FormsModule } from '@angular/forms';
import { FormDataComponent } from './form-parent/form-data/form-data.component';
import { ChatParentComponent } from './chat-parent/chat-parent.component';
import { FormParentComponent } from './form-parent/form-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ChatComponent,
    ChatMessagesComponent,
    FormDataComponent,
    ChatParentComponent,
    FormParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
