import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-segundo-chat',
  templateUrl: './segundo-chat.component.html',
  styleUrls: ['./segundo-chat.component.css']
})
export class SegundoChatComponent implements OnInit {

  public messages: string[] = [];

  constructor(public chatService : ChatService) { }

  ngOnInit(): void {
  }


}
