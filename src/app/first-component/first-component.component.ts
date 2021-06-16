import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormService } from '../service-form/form.service';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
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
