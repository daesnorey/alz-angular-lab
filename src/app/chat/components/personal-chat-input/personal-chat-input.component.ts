import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-personal-chat-input',
  templateUrl: './personal-chat-input.component.html',
  styleUrls: ['./personal-chat-input.component.css'],
})
export class PersonalChatInputComponent implements OnInit {

  public message: string = '';

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit(): void {
    this.clearMessage();
  }

  private clearMessage() {
    this.message = '';
  }

  public submit(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();

    if (!this.message) {
      return;
    }

    this.chatService.addMessage(this.message);
    this.clearMessage();
  }
}
