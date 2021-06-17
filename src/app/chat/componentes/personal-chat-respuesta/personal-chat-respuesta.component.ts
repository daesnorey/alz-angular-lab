import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-personal-chat-respuesta',
  templateUrl: './personal-chat-respuesta.component.html',
  styleUrls: ['./personal-chat-respuesta.component.css']
})
export class PersonalChatRespuestaComponent implements OnInit {

  

  ngOnInit(): void {
  }

 /*  @Input()
  public mensajes : string[] = []; */

  constructor(public chatService : ChatService) { }



}
