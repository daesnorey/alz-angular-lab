import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatInputComponent } from './Componentes/chat-input/chat-input.component';
import { ChatOutputComponent } from './Componentes/chat-output/chat-output.component';
import { ChatParentComponent } from './Componentes/chat-parent/chat-parent.component';
import { ChatService } from './Services/chat/chat-service';
import { ChatRoutingModule } from './chat-routing-module';
import { ChatTestComponent } from './Componentes/chat-test/chat-test.component';
import { ChatSecondTestComponent } from './Componentes/chat-second-test/chat-second-test.component';
import { ChatThirdTestComponent } from './Componentes/chat-third-test/chat-third-test.component';
import { ChatWrapperComponent } from './Componentes/chat-wrapper/chat-wrapper.component';

@NgModule({
  declarations: [
    ChatInputComponent,
    ChatOutputComponent,
    ChatParentComponent,
    ChatTestComponent,
    ChatSecondTestComponent,
    ChatThirdTestComponent,
    ChatWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
  ],
  exports:[
    ChatParentComponent
    ],
  providers:[
    ChatService
  ]
})
export class ProjectChatModule { }
