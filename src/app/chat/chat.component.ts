import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public message?: string;
  @Output() messageSubmitted = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.messageSubmitted.emit(this.message);
    this.message = "";
  }
}
