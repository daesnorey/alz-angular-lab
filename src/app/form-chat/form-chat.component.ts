import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css'],
  providers: [
    FormularioService
  ]
})
export class FormChatComponent implements OnInit {

  public name: string = '';

  public lastname: string = '';

  constructor(
    public formchat: FormularioService
  ) { }

  ngOnInit(): void {
    this.clearData();
  }

  private clearData(){
    this.name = '';
    this.lastname = '';
  }

  public onDataSubmited(ev: Event) {
    ev.preventDefault();
    ev.stopImmediatePropagation();

    if (!this.name){
      return;
    }

    if (!this.lastname){
      return;
    }

    this.formchat.addName(this.name);
    this.formchat.addLastname(this.lastname);
    this.clearData();
  }

}
