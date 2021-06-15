import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css'],
})
export class ChatMessagesComponent implements OnInit {
 /* @Input()
  public messages!: string[];*/
  
  constructor(
    public chatService: ChatService
  ) {}

  ngOnInit(): void {}


}
