import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PrimerChatComponent } from './primer-chat/primer-chat.component';
import { SegundoChatComponent } from './segundo-chat/segundo-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PrimerChatComponent,
    SegundoChatComponent
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
