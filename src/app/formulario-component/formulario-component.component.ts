import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormularioServicioService } from '../formulario-servicio/formulario-servicio.service';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css'],
})
export class FormularioComponentComponent implements OnInit {


  ngOnInit(): void {
  }

  /* @Input() */
  public nombre : string;
  /* @Input() */
  public apellido : string;
  /* @Input() */
  public fechaNacimiento : string;

  /* @Output()
  public onValueChange!:EventEmitter<string>; */

 /*  constructor(public formularioServicioService : FormularioServicioService){
       this.onValueChange = new EventEmitter();      
       this.nombre = formularioServicioService.nombre;
       this.apellido = formularioServicioService.apellido;
       this.fechaNacimiento = formularioServicioService.fechaNacimiento;
  }  */

  constructor(public formularioServicioService : FormularioServicioService){
    this.nombre = formularioServicioService.nombre;
    this.apellido = formularioServicioService.apellido;
    this.fechaNacimiento = formularioServicioService.fechaNacimiento;
}   

  /* public onChange(ev: any){
    this.onValueChange.next(ev.target.value);
  } */

  /* public onChange(){
    this.onValueChange.next(ev.target.value);
  } */

   public onChange(){
    this.formularioServicioService.cambiarDatos(this.nombre,this.apellido,this.fechaNacimiento);
   }

}
