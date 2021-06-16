import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //  public messagesP: string[] = [];
  public name!: string;
  public lastName!: string;
  public birthDate!: string;

  constructor(private formService: FormService) {}

  ngOnInit(): void {}

  /*  onMessageSubmitted(msg: string) {
    this.messagesP.push(msg);
  }*/

  public onSubmit() {
    this.formService.addData(this.name, this.lastName, this.birthDate);
  }
}
