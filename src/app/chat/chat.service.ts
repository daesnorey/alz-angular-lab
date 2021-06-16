import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  public messages: string[] =[];
  
  public addMessage(message: string){
    this.messages.push(message);
    console.log(this.messages)
  }
}
