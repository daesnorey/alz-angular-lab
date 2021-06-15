import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message?: string;  
  @Output() onMessageSubmit!: EventEmitter<string>;

  constructor() {
    this.onMessageSubmit = new EventEmitter();
   }

  public onMessageSubmited(eve: any){
    this.onMessageSubmit.next(this.message);
    this.message=''
  }

  ngOnInit(): void {
  }

}
