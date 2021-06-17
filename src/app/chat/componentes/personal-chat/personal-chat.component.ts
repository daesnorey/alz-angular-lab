import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.css']
})
export class PersonalChatComponent implements OnInit {


  ngOnInit(): void {
  }

  public mensaje : string;
/*   public mensajes : string[] = [];
 */
  /* @Output()
  public onValueChange!:EventEmitter<string>; */
 
 
  constructor(private chatService : ChatService){
/*     this.onValueChange = new EventEmitter(); */  }

 

  public onChange(){
    /* this.onValueChange.emit(this.mensaje);
     */
    this.chatService.addMensajes(this.mensaje);
    this.mensaje = "";
  }

}
