import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-primer-chat',
  templateUrl: './primer-chat.component.html',
  styleUrls: ['./primer-chat.component.css']
})
export class PrimerChatComponent implements OnInit {

  public message?: string;
  
  constructor(private chatService : ChatService) {
    
  }

  ngOnInit(): void {
  }
  
  public onChangeMessage(){
      this.chatService.addMessages(this.message);
      this.message = '';
  }

}
