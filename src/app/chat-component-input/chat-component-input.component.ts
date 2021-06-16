import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat/chat-service';

@Component({
  selector: 'app-chat-component-input',
  templateUrl: './chat-component-input.component.html',
  styleUrls: ['./chat-component-input.component.css']
})
export class ChatComponentInputComponent implements OnInit {//Con el decorador Input le estoy diciendo que mi atributo es de entrada

  public mensajeEscrito: string = "";
  constructor(private chatService: ChatService) {
  }

  public enviarMensaje() {
    this.chatService.adicionarMensajes(this.mensajeEscrito)
    console.log("Aca escribi: " + this.mensajeEscrito)
    this.mensajeEscrito = "";
  }
  ngOnInit(): void {
  }

}
