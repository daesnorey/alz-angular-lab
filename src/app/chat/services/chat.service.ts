import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public mensagges : string [] = []

  /**
   * addMensagges
   */
  public addMensagges(mensagge: string) {
    this.mensagges.push(mensagge);
    //console.log("add")
  }

  /**
   * deleteAllMensagges
   */
  public deleteAllMensagges() {
    this.mensagges = []
    // console.log("limpieza")
  }

  constructor() { }
}
