import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './services/service-form/form.service';
import { ChatComponent } from './components/chat/chat.component';
import { ListPersonalComponent } from './components/listPersonal/listPersonal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    ChatComponent,
    ListPersonalComponent
],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ChatComponent,
    ListPersonalComponent
  ],
  providers: [
    FormService
  ]
})
export class FormModule { }