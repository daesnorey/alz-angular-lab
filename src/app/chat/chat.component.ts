import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public message!: string;
 // @Output() messageSubmitted = new EventEmitter<string>();

  constructor(
    public chatService: ChatService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.chatService.addMessage(this.message);
    this.message = "";
  }
}
