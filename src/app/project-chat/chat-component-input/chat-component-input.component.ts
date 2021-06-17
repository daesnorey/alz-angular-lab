import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../Services/chat/chat-service';

@Component({
  selector: 'app-chat-component-input',
  templateUrl: './chat-component-input.component.html',
  styleUrls: ['./chat-component-input.component.css']
})
export class ChatComponentInputComponent implements OnInit {

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
