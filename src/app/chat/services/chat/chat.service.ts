import { Injectable } from '@angular/core';

@Injectable()

export class ChatService {
  public messages?: string[] = [];

  constructor() { }

  public addMessages(message: string){
    this.messages.push(message);
  }
}
