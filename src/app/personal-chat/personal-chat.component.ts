import { Component } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { DataService } from '../data.service';

// DataService 03

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css'],
  providers: [
    ChatService,
  ]
})
export class PersonalChatComponent {
  
  public messages: string[] = [];

  public addMessage(message: string) {
    this.messages.push(message);
  }
}
