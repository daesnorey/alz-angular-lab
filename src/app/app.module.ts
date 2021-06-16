import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { PersonalChatRespuestaComponent } from './personal-chat-respuesta/personal-chat-respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponentComponent,
    PersonalChatComponent,
    PersonalChatRespuestaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
