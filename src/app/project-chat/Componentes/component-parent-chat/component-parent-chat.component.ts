import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-parent-chat',
  templateUrl: './component-parent-chat.component.html',
  styleUrls: ['./component-parent-chat.component.css']
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
