import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalChatComponent } from './componentes/personal-chat/personal-chat.component';
import { PersonalChatRespuestaComponent } from './componentes/personal-chat-respuesta/personal-chat-respuesta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalChatComponent,
    PersonalChatRespuestaComponent
  ],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [
    PersonalChatComponent,
    PersonalChatRespuestaComponent
  ]
})
export class ChatModule { }
