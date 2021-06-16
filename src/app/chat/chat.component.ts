import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[
    DataService,
    ChatService
  ]
})
export class ChatComponent implements OnInit {
  public message: string= '';

  constructor(
    private chatService: ChatService,
    private dataService: DataService 
  ) { }

  ngOnInit(): void {
  }

}
