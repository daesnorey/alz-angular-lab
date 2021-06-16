import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  public mensajes : string[]= [];

  public addMensajes(mensaje:string){
    this.mensajes.push(mensaje);
    console.log(this.mensajes);
  }

}
