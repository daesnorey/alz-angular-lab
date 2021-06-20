import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  public nombreEscrito: string = "";
  public apellidoEscrito: string = "";
  public fechaEscrita: string = "";

  public changeName(value: string) {
    this.nombreEscrito = value;
  }

  public changeLastName(value: string) {
    this.apellidoEscrito = value;
  }

  public changeDate(value: string) {
    this.fechaEscrita = value;
  }

  constructor() { }
}
