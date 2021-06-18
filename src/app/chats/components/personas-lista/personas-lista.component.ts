import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/chats/services/chat/chat.service';


@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrls: ['./personas-lista.component.css']
})
export class PersonasListaComponent implements OnInit {
  
  public menssage?: string[] = [];
  ngOnInit(): void {
  }

  constructor(
    public chatService: ChatService
  ){}

}
