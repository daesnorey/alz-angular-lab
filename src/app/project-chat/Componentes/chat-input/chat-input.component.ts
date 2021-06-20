import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../../Services/chat/chat-service';

@Component({
  selector: 'app-chat-component-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

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
