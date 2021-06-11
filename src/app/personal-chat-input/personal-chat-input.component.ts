import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-chat-input',
  templateUrl: './personal-chat-input.component.html',
  styleUrls: ['./personal-chat-input.component.css']
})
export class PersonalChatInputComponent implements OnInit {

  @Output() public messaged!: EventEmitter<string>;

  public message: string = '';

  constructor() {
    this.messaged = new EventEmitter();
  }

  ngOnInit(): void {
    this.clearMessage();
  }

  private clearMessage() {
    this.message = '';
  }

  public submit(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();

    if (!this.message) {
      return;
    }

    this.messaged.next(this.message);
    this.clearMessage();
  }
}
