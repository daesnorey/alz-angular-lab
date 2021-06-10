import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent {

  public messages: string[] = [];

  public addMessage(message: string) {
    this.messages.push(message);
  }
}
