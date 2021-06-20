import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../Services/chat/chat-service';

@Component({
  selector: 'app-chat-output',
  templateUrl: './chat-output.component.html',
  styleUrls: ['./chat-output.component.css'],
})
export class ChatOutputComponent implements OnInit {
  constructor(public chatService : ChatService) { }
  
  ngOnInit(): void {
  }

}
