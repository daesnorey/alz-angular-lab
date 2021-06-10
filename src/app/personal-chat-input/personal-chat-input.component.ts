import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-chat-input',
  templateUrl: './personal-chat-input.component.html',
  styleUrls: ['./personal-chat-input.component.css']
})
export class PersonalChatInputComponent implements OnInit {

  @Output() onMessage!: EventEmitter<string>;

  public message: string = '';

  constructor() {
    this.onMessage = new EventEmitter();
  }

  ngOnInit(): void {
    this.clearMessage();
  }

  private clearMessage() {
    this.message = '';
  }

  public submit(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
  }
}
