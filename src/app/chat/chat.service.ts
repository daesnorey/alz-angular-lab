import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages: string[] =[];
  
  public addMessage(message: string){
    this.messages.push(message);
  }
}
