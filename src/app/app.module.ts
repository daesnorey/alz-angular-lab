import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
/*import { TestComponent } from './test/test.component';
import { FormChatComponent } from './form-chat/form-chat.component'*/
import { ChatModule } from './chat_module/chat.module';
import { FormModule } from './form-chat/form-chat.module';

@NgModule({
  declarations: [
    AppComponent/*,
    TestComponent,    
    FormChatComponent*/
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ChatModule,
    FormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
