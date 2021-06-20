import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../Services/data/datos.service';

@Component({
  selector: 'app-personal-data-parent',
  templateUrl: './personal-data-parent.component.html',
  styleUrls: ['./personal-data-parent.component.css']
})
export class PersonalDataPaternComponent implements OnInit {
   //Agregamos campos inicializados en el componente padre
   /*
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
   */
  constructor(private datosService : DatosService) { }

  ngOnInit(): void {
  }

}
