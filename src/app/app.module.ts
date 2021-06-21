import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';

import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormModule,
    ChatModule,    
    AppRoutingModule,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
