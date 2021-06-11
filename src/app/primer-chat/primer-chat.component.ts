import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primer-chat',
  templateUrl: './primer-chat.component.html',
  styleUrls: ['./primer-chat.component.css']
})
export class PrimerChatComponent implements OnInit {

  @Input()
  public message?: string;
  @Output()
  public valueChangedMessage!: EventEmitter<string>;
  
  constructor() { 
    this.valueChangedMessage = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  public onChangeMessage(){
      this.valueChangedMessage.next(this.message);
      this.message = '';
  }

}
