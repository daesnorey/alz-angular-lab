import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { ChatComponent } from './chat/components/chat/chat.component';
import { MessageSenderComponent } from './chat/components/message-sender/message-sender.component';
import { MessageReceiverComponent } from './chat/components/message-receiver/message-receiver.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageSenderComponent,
    MessageReceiverComponent,
  ],
  imports: [
    BrowserModule,
    FormModule,
    AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
