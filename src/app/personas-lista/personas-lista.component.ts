import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrls: ['./personas-lista.component.css']
})
export class PersonasListaComponent implements OnInit {
  @Input()
  public menssage?: string[] = [];
  ngOnInit(): void {
  }

  constructor(
    public chatService: ChatService,
  ){}

}
