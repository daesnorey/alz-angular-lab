import { Injectable } from '@angular/core';

@Injectable()

export class ChatServiceService {

  constructor() { }

  public messages: string[] =[];

  public sendMessage(sentMessage: string){
    this.messages.push(sentMessage);    
    console.log("chat :" + sentMessage);
  }
}
