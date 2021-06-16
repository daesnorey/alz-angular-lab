import { Component } from '@angular/core';
import { FormularioServicioService } from './formulario-servicio/formulario-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
 /*  public parentMensaje : string  = "";
  public parentMensajes : string[] = [];

 
  public onChange(value : string){
    this.parentMensaje = value;
    this.parentMensajes.push(this.parentMensaje);
  } */

  constructor(public formularioServicioService: FormularioServicioService){}
 
  public parentNombre : string = "Jorge";
  public parentApellido : string = "Quintero";
  public parentFechaNacimiento : string = "1990-01-01";


}
