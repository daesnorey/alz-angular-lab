import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';

import { ChatModule } from './chat/chat.module';
import { ChatRoutingModule } from './chat/chat-routing.module';
import { FormRoutingModule } from './form/form-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormModule,
    ChatModule,    
    AppRoutingModule, ChatRoutingModule, FormRoutingModule,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
