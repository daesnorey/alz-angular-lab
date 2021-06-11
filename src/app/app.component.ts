import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';
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

}
