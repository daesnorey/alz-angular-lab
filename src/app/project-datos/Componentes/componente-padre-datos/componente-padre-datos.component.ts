import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-padre-datos',
  templateUrl: './componente-padre-datos.component.html',
  styleUrls: ['./componente-padre-datos.component.css']
})
export class ComponentePadreDatosComponent implements OnInit {
   //Agregamos campos inicializados en el componente padre
   public nombreComponentPadre?: string = "Sebastian";
   public apellidoComponentPadre?: string = "Vettel";
   public fechaNacimientoComponentPadre?: string = "1987-07-03";
 
   //Se crea un función donde se le da funcionalidad al evento
   public changeNamePatern(value: string){
     this.nombreComponentPadre = value; 
   }
 
   public changeLastNamePatern(value: string){
     this.apellidoComponentPadre = value; 
   }
 
   public changeDatePatern(value: string){
     this.fechaNacimientoComponentPadre = value; 
   }
  constructor() { }

  ngOnInit(): void {
  }

}
