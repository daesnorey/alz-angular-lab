import { Component, Input } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-personal-chat-message-list',
  templateUrl: './personal-chat-message-list.component.html',
  styleUrls: ['./personal-chat-message-list.component.css']
})
export class PersonalChatMessageListComponent {

  constructor(
    public chatService: ChatService,
  ) {}

}
