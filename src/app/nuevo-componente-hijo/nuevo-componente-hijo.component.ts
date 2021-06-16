import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat/chat-service';

@Component({
  selector: 'app-nuevo-componente-hijo',
  templateUrl: './nuevo-componente-hijo.component.html',
  styleUrls: ['./nuevo-componente-hijo.component.css'],
})
export class NuevoComponenteHijoComponent implements OnInit {
  constructor(public chatService : ChatService) { }
  
  ngOnInit(): void {
  }

}
