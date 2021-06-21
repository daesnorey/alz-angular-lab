import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {
  public message!: string;
  
  constructor(private chatService: ChatServiceService) {
  }

   public onMessageSubmited(){
    this.chatService.sendMessage(this.message);
    this.message='';    
  }

  ngOnInit(): void {
  }

}
