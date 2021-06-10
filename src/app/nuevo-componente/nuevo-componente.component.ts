import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {

  public nombre: string = "Sebastian";
  public apellido: string = "Vettel";
  public fechaNacimiento: string = "1987-07-03";

  constructor() { }

  ngOnInit(): void {
  }

  //Se crean eventos de prueba
  public cambioNombre(evento:any){
    this.nombre = evento.target.value;
  }

  public cambioApellido(evento:any){
    this.apellido = evento.target.value;
  }

  public cambioFecha(evento:any){
    this.fechaNacimiento = evento.target.value;
  }

}
