import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nombre : string  = "Ivan";
  public apellido : string  = "Quintero";
  public fechaNacimiento : string  = "1990-01-01";


  public onNameChanged(ev : any){
    this.nombre = ev.target.value;
  }
  public onApellidoChanged(ev : any){
    this.apellido = ev.target.value;
  }
  public onFechaNacimientoChanged(ev : any){
    this.fechaNacimiento = ev.target.value;
  }

}
