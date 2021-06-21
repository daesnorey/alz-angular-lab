import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormChatComponent } from './form-chat.component';
import { FormularioService } from '../formulario.service';

@NgModule({
    declarations: [
       FormChatComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule
    ],
    exports:[
      FormChatComponent
    ],
    providers:[
      FormularioService
    ]
  })

  export class FormModule { }