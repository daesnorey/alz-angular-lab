import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormService } from '../../services/service-form/form.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public name!: string;
  public lastname!: string;
  public birthdate!: string;

   constructor(private formService: FormService) {
  }

  //CHAT
   public onMessageSubmited(){
    this.formService.addMessage(this.name, this.lastname, this.birthdate);
    this.name='';
    this.lastname='';
    this.birthdate='';    
  }

  ngOnInit(): void {
  }

}