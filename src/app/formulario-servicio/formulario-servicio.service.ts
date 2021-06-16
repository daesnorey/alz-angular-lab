import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioServicioService {

  constructor() { }

  public nombre : string = "Jorge";
  public apellido : string = "Quintero";
  public fechaNacimiento : string = "1990-01-01";


  /**
   * cambiarDatos
   */
  public cambiarDatos(nombre : string, apellido : string, fechaNacimiento : string ) {
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }
  

}
