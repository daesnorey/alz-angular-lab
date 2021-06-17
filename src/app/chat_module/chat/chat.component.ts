import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatsService } from '../chats/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: string = '';

  constructor(
    private chatservice: ChatsService
  ){}

  ngOnInit(): void{
    this.clearMessage();
  }

  private clearMessage() {
    this.message = '';
  }

  public onMessageSubmited(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();

    if (!this.message) {
      return;
    }

    this.chatservice.addMessage(this.message);
    this.clearMessage();
  }

}
