import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-parent',
  templateUrl: './chat-parent.component.html',
  styleUrls: ['./chat-parent.component.css'],
  providers: [ChatService],
})
export class ChatParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
