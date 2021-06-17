import { Component, Input, OnInit } from '@angular/core';
import { ChatsService } from '../chats/chats.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  /*@Input() finalMessages?: string[];
  finalMessage?: string;
  
  constructor() { }*/

  ngOnInit(): void {
  }

  constructor(
    public chatservice: ChatsService,
  ){}

}
