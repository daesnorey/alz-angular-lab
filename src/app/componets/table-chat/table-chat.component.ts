import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-table-chat',
  templateUrl: './table-chat.component.html',
  styleUrls: ['./table-chat.component.css']
})
export class TableChatComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

}
