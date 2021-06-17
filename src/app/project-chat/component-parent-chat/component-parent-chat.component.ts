import { Component, OnInit } from '@angular/core';
import { ChatService } from '../Services/chat/chat-service';

@Component({
  selector: 'app-component-parent-chat',
  templateUrl: './component-parent-chat.component.html',
  styleUrls: ['./component-parent-chat.component.css'],
  providers:[ChatService]
})
export class ComponentParentChatComponent implements OnInit {
  public arregloMensajes?: string[]=[];

  public adicionarMensajes(value:string){
    this.arregloMensajes?.push(value)
    console.log("Mensaje adicionado al arreglo "+value)
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
