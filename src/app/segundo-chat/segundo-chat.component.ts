import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-chat',
  templateUrl: './segundo-chat.component.html',
  styleUrls: ['./segundo-chat.component.css']
})
export class SegundoChatComponent implements OnInit {
  @Input()
  public messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public onChangeMessage(message : string[]){
    this.messages = message;
  }

}
