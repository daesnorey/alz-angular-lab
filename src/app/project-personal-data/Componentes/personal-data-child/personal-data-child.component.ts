import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosService } from '../../Services/data/datos.service';

@Component({
  selector: 'app-personal-data-hijo',
  templateUrl: './personal-data-child.component.html',
  styleUrls: ['./personal-data-child.component.css']
})
export class PersonalDataChildComponent implements OnInit {
  //Con el decorador Input le estoy diciendo que mi atributo es de entrada
  /* 
    @Input() public nombreComponentHijo?: string;
    @Input() public apellidoComponentHijo?: string;
    @Input() public fechaNacimientoComponentHijo?: string;

  // Se crea variable que va ser igual a un evento
     @Output() public changeName!: EventEmitter<string>;
     @Output() public changeLastName!: EventEmitter<string>;
     @Output() public changeDate!: EventEmitter<string>;
*/
    public namePersonalData?: string;
    public lastNamePersonalData?: string;
    public datePersonalData?: string;
  // Realizo la inyección correspondiente.
  constructor(public datosService: DatosService) {
    //Se debe crear un constructor donde se realiza una instancia de la variale creada
    /*this.changeName = new EventEmitter();
    this.changeLastName = new EventEmitter();
    this.changeDate = new EventEmitter();
    */
  }
  public executeChangeName() {
    this.datosService.changeName(this.namePersonalData!);
    console.log("Valor escritom en campo nombre: " + this.namePersonalData);
  }

  public executeChangeLastName() {
    this.datosService.changeLastName(this.lastNamePersonalData!);
    console.log("Valor escrito en campo apellido: " + this.lastNamePersonalData);
  }

  public executeChangeDate() {
    this.datosService.changeDate(this.datePersonalData!);
    console.log("Valor escrito en campo fecha: " + this.datePersonalData);
  }
  /*
  //Se crea un función donde se le da funcionalidad al evento
  public executeChangeName(ev: any) {
    this.changeName.next(ev.target.value);
    //alert("Se esta ejecutando correctamente el evento")
  }

  public executeChangeLastName(ev: any) {
    this.changeLastName.next(ev.target.value);
  }

  public executeChangeDate(ev: any) {
    this.changeDate.next(ev.target.value);
  }
  */
  ngOnInit(): void {
  }

  //Se crean eventos de prueba
  /*
  public cambioNombre(evento:any){
    this.nombre = evento.target.value;
  }

  public cambioApellido(evento:any){
    this.apellido = evento.target.value;
  }

  public cambioFecha(evento:any){
    this.fechaNacimiento = evento.target.value;
  }*/

}
