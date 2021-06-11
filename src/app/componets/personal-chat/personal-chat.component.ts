import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {
  @Input()
  public mensaje?: string;
  
  @Output()
  public sendMesage!: EventEmitter<string>
  @Output()
  public limpiarMensajes!: EventEmitter<string>
  
  constructor() {
    this.sendMesage = new EventEmitter();
    this.limpiarMensajes = new EventEmitter();
  }
  
  public enviar(){
    if(this.mensaje){
      this.sendMesage.next(this.mensaje);
      console.log("enviado----"+ this.mensaje)
      this.mensaje = '';
    }
  }

  public limpiar(){
      this.limpiarMensajes.next("0");
  }

  ngOnInit(): void {
  }

}
