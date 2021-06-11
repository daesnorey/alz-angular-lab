import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-chat-message-list',
  templateUrl: './personal-chat-message-list.component.html',
  styleUrls: ['./personal-chat-message-list.component.css']
})
export class PersonalChatMessageListComponent {

  @Input() public messages!: string[];

}
