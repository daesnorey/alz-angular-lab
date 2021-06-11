import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  ngOnInit(): void {
  }

  public message?: string;

  @Output()
  public sendMessage!: EventEmitter<String>;

  constructor() { 
    this.sendMessage = new EventEmitter();
  }

  public onSubmit(){
    this.sendMessage.next(this.message);
    this.message = '';
  }

}
