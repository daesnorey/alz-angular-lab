import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../../../project-chat/Services/chat/chat-service';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {
  //Con el decorador Input le estoy diciendo que mi atributo es de entrada
    @Input() public nombreComponentHijo?: string;
    @Input() public apellidoComponentHijo?: string;
    @Input() public fechaNacimientoComponentHijo?: string;

  // Se crea variable que va ser igual a un evento
     @Output() public changeName!: EventEmitter<string>;
     @Output() public changeLastName!: EventEmitter<string>;
     @Output() public changeDate!: EventEmitter<string>;

  // Realizo la inyección correspondiente.
  constructor(private chatService: ChatService) {
    //Se debe crear un constructor donde se realiza una instancia de la variale creada
    this.changeName = new EventEmitter();
    this.changeLastName = new EventEmitter();
    this.changeDate = new EventEmitter();
  }

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
