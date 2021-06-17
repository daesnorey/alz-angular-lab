import { Injectable } from '@angular/core';

@Injectable()

export class ChatsService {

  public messages: string[] = [];

  public addMessage(message: string){
    this.messages.push(message);
  }
}
