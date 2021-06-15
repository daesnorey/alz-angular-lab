import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {

  public mensaje?: string;
  
  constructor(private chatService: ChatService ) {
  }
  
  public enviar(){
    if(this.mensaje){
      // this.sendMesage.next(this.mensaje);
      this.chatService.addMensagges(this.mensaje)
      console.log("enviado----"+ this.mensaje)
      this.mensaje = '';
    }
  }

  public limpiar(){
    this.chatService.deleteAllMensagges()
  }

  ngOnInit(): void {
  }

}
