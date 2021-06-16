import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoComponenteHijoComponent } from './nuevo-componente-hijo/nuevo-componente-hijo.component';
import { ChatComponentInputComponent } from './chat-component-input/chat-component-input.component';
import { ChatService } from './chat/chat-service';
import { ComponentParentChatComponent } from './component-parent-chat/component-parent-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    NuevoComponenteHijoComponent,
    ChatComponentInputComponent,
    ComponentParentChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
