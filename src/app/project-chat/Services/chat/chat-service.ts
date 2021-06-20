import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  public mensajesAlmacenados: string[] = [];

  public adicionarMensajes(mensaje: string) {
    this.mensajesAlmacenados.push(mensaje);
    console.log("Mensaje agregado: " + this.mensajesAlmacenados)
  }

  constructor() { }
}
