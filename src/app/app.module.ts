import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { FormChatComponent } from './form-chat/form-chat.component'
import { ChatModule } from './chat_module/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,    
    FormChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
