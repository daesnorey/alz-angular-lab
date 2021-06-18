import { Component, Input, OnInit} from '@angular/core';
import { ChatService } from 'src/app/chats/services/chat/chat.service';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @Input()
  public mensaje?: string;
  
  constructor(
    public chatService: ChatService

  ) {

  }
  
  public enviar(){
    if(this.mensaje){
      this.chatService.addMessage(this.mensaje);
      console.log("almacenado"+ this.mensaje)
      this.mensaje = '';    
      
    }
  }

  ngOnInit(): void {
  }

}
