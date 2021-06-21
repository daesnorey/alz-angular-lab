import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.css']
})
export class MessageReceiverComponent implements OnInit {

  constructor(public chatService: ChatServiceService) { }
  

  ngOnInit(): void {
  }

}
