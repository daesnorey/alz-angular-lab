import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public menssageList : string[] = [];
 
  public addMenssage(value: string){
    this.menssageList.push(value);
    console.log(this.menssageList.length)
  }

  public cleanList(status: string){
    this.menssageList = []
    console.log('Se limpio mensajes esatus: '+status)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
