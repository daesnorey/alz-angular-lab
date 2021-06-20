import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-parent-chat',
  templateUrl: './chat-parent.component.html',
  styleUrls: ['./chat-parent.component.css']
})
export class ChatParentComponent implements OnInit {
  public arregloMensajes?: string[]=[];

  public adicionarMensajes(value:string){
    this.arregloMensajes?.push(value)
    console.log("Mensaje adicionado al arreglo "+value)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
