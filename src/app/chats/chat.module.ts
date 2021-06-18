import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chat/chat.service';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonasListaComponent } from './components/personas-lista/personas-lista.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonasComponent,
    PersonasListaComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    ChatService
  ],
  exports:[
    PersonasComponent,
    PersonasListaComponent,
    ChatComponent
  ]
})
export class ChatModule { }
