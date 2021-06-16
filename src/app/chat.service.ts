import { Injectable } from '@angular/core';
import { ChatComponent } from './chat-parent/chat/chat.component';

@Injectable()
export class ChatService {
public messages: string[] = [];

  constructor() { }

public addMessage(msg: string) {
  this.messages.push(msg);
}

}
