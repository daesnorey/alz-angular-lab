import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
public messages: string[] = [];

  constructor() { }

public addMessage(msg: string) {
  this.messages.push(msg);
}

}
