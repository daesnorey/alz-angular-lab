import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public messagesP: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onMessageSubmitted(msg: string) {
    this.messagesP.push(msg);
    console.log(msg);
  }
}
